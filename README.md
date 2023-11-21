## Blockchain Voting System

This project implements a secure and decentralized voting system using Ethereum blockchain technology. The system leverages smart contracts to manage the election process, ensuring transparency and integrity of the voting process.


![image](https://github.com/ferielbouhamed21/Election-web3/assets/78966152/c050dde5-a44e-425f-b3c4-4f8b75231d3f)


## Features

- Decentralized Voting: Utilizes Ethereum blockchain for decentralized and tamper-proof voting.
- Smart Contracts: Implements smart contracts to manage candidate listings, voter registration, and vote counting.
- Transparent & Immutable: Ensures transparency in the voting process while maintaining immutability of votes.
- Web Interface: Provides a user-friendly web interface for voters to cast their votes and view election results.

Before getting started, make sure you have the following tools and dependencies installed:

## Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [Truffle](https://www.trufflesuite.com)
- [Ganache](https://www.trufflesuite.com/ganache)
- [py-solc-x](https://pypi.org/project/py-solc-x/)
- [Metamask](https://metamask.io)
- [Google Chrome](https://www.google.com/chrome/) or [Firefox](https://www.mozilla.org/firefox)

## Getting Started

Follow these steps to get started with this project:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ferielbouhamed21/Election-web3.git
2. Open [Ganache](https://trufflesuite.com/ganache/)
> Create new Workspace using `truffle-config.js`
3. Install project dependencies:

   ```bash
   npm install
4. Steps to Compile and Deploy:

   - Compiles contracts

     This command compiles all the contracts within the contracts directory and generates corresponding JSON artifacts in the build/contracts directory.

      ```bash
      truffle compile

![Screenshot 2023-11-20 224925](https://github.com/ferielbouhamed21/Election-web3/assets/78966152/80eb4512-dd45-498f-a64e-0c7535c39c3a)

   - Deploying Smart Contracts:

     This command will deploy the contracts defined in your migrations scripts to the specified network.

      ```bash
      truffle migrate

![Screenshot 2023-11-20 230251](https://github.com/ferielbouhamed21/Election-web3/assets/78966152/5d709c2c-b200-4d7a-999b-d872f1a5bd75)

![Screenshot 2023-11-20 230330](https://github.com/ferielbouhamed21/Election-web3/assets/78966152/48a5fa14-2f6a-4459-8e35-9790caf9eb58)

   - Runs tests

     Once deployed, verify the deployment status and test the functionality of the smart contracts using Truffle's testing suite.

      ```bash
      truffle test

![Screenshot 2023-11-20 231717](https://github.com/ferielbouhamed21/Election-web3/assets/78966152/c83c6310-d508-4c13-b602-0a77393c01c6)


  - Interact with your smart contract using the Truffle console:

![Screenshot 2023-11-20 233756](https://github.com/ferielbouhamed21/Election-web3/assets/78966152/6acb583d-8197-4ac1-86d0-a1f7f47bfa59)

![Screenshot 2023-11-20 233939](https://github.com/ferielbouhamed21/Election-web3/assets/78966152/f4c00efa-f33a-4915-bb71-16b74c6999ac)

5. Installing MetaMask
   Click on the link, and it will take you to the download page : 
<a href="https://metamask.io/" target="_blank"> Metamask </a>
6. Start the development server:
   ```bash
   npm run dev
7. Open your browser and navigate to http://localhost:3000 to interact with the DApp.


## Development

The project covers the following topics:

- Setting up the development environment
- Creating a Truffle project using a Truffle Box
- Writing the smart contract
- Compiling and migrating the smart contract
- Testing the smart contract
- Creating a user interface to interact with the smart contract
- Interacting with the DApp in a browser

## Testing the Application with MetaMask Extension

Launch the Application and connect MetaMask, it will inject a web3 instance into the browser, enabling interaction with the Ethereum blockchain.


![Screenshot 2023-11-20 234849](https://github.com/ferielbouhamed21/Election-web3/assets/78966152/8b9743f3-e3d1-4c29-aafd-76825dd7fc74)


- Ensure MetaMask is unlocked and connected to the correct network.
- Make sure to have Ether in your MetaMask account to cover gas fees for transactions.
- Explore the interface to view candidates, cast votes, and track election results as per the application's functionality.
- MetaMask will display transaction prompts when interacting with the smart contracts.

![image](https://github.com/ferielbouhamed21/Election-web3/assets/78966152/929c6f57-e8a6-4dc9-b2f0-3cfe54490f1b)


![image](https://github.com/ferielbouhamed21/Election-web3/assets/78966152/ce21f80e-06fb-433c-b31e-79690cf97f42)


![image](https://github.com/ferielbouhamed21/Election-web3/assets/78966152/202f30d8-453d-4514-8f3e-de43838209d5)


- Within Ganache, you can access the same transaction in the "Transactions" section. Additionally, details about the created blocks, in the "Blocks" section, such as mining date, time, and gas used, can be found.


![image](https://github.com/ferielbouhamed21/Election-web3/assets/78966152/384338b8-6936-44c8-93d5-84e8024a1e89)


![image](https://github.com/ferielbouhamed21/Election-web3/assets/78966152/b4646c48-0a84-45a1-97a8-a4ab1862dc43)


## Contributing

If you want to contribute to this project, feel free to open an issue or submit a pull request. We welcome contributions from the community.
