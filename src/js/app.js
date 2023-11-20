var App = {
  gotPromise: false,
  web3Provider: null,
  contracts: {},
  account: '0x0',
  hasVoted: false,

  init: function () {
    return App.initWeb3();
  },

  initWeb3: function () {
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function () {
    $.getJSON('Election.json', function (election) {
      App.contracts.Election = TruffleContract(election);
      App.contracts.Election.setProvider(App.web3Provider);
      App.listenForEvents();
      App.render();
    });
  },

  listenForEvents: function () {
    App.contracts.Election.deployed().then(function (instance) {
      instance.votedEvent({}, { fromBlock: 0, toBlock: 'latest' }).watch(function (error, event) {
        console.log('Event triggered', event);
        App.render();
      });
    }).catch(function (error) {
      console.error('Error in listenForEvents:', error);
    });
  },

  render: function () {
    var electionInstance;
    var loader = $('#loader');
    var content = $('#content');
    loader.show();
    content.hide();

    web3.eth.getCoinbase(function (err, account) {
      if (err === null) {
        App.account = account;
        $('#accountAddress').html('Your Account: ' + account);
      }
    });

    App.contracts.Election.deployed().then(function (instance) {
      electionInstance = instance;
      return electionInstance.candidatesCount();
    }).then(function (candidatesCount) {
      if (!App.gotPromise) {
        App.gotPromise = true;
        var candidatesResults = $('#candidatesResults');
        candidatesResults.empty();
        var candidatesSelect = $('#candidatesSelect');
        candidatesSelect.empty();

        for (var i = 1; i <= candidatesCount; i++) {
          App.loadCandidateTemplate(electionInstance, i, candidatesResults, candidatesSelect);
        }
      }
      return electionInstance.voters(App.account);
    }).then(function (hasVoted) {
      if (hasVoted) {
        $('form').hide();
      }
      loader.hide();
      content.show();
    }).catch(function (error) {
      console.warn('Error in render:', error);
    });
  },

  loadCandidateTemplate: function (instance, id, candidatesResults, candidatesSelect) {
    instance.candidates(id).then(function (candidate) {
      var id = candidate[0];
      var name = candidate[1];
      var voteCount = candidate[2];

      var candidateTemplate = "<tr><th>" + id + "</th><td>" + name + "</td><td>" + voteCount + "</td></tr>";
      candidatesResults.append(candidateTemplate);

      var candidateOption = "<option value='" + id + "'>" + name + "</option>";
      candidatesSelect.append(candidateOption);
    });
  },

  castVote: function () {
    var candidateId = $('#candidatesSelect').val();
    App.contracts.Election.deployed().then(function (instance) {
      return instance.vote(candidateId, { from: App.account });
    }).then(function (result) {
      $('#content').hide();
      $('#loader').show();
    }).catch(function (err) {
      console.error('Error in castVote:', err);
    });
  }
};

$(function () {
  $(window).load(function () {
    App.init();
  });
});
