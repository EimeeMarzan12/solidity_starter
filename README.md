# Smart Contract Conditions Project 

This project is a simple Ethereum smart contract that allows for Ether deposits, withdrawals by the owner, balance verification, and resetting the contract state under certain conditions.

## Description

Smart Contract Conditions Project is a Solidity-based smart contract designed to manage Ether deposits, withdrawals, and state management. 

The contract allows:
1. Anyone to deposit Ether into the contract.
2. The owner to withdraw Ether from the contract.
3. The owner to reset the contract state, but only if the balance is zero.
4. Validation using require(), assert(), and revert() to enforce correct behaviors and ensure the integrity of the contract's state.

The contract includes basic functionality for interacting with Ether on the Ethereum blockchain, with simple checks to prevent unauthorized actions or errors.

## Getting Started


### Installing

To set up and run the project, follow these steps:

1. **Clone the repository**:
2. **Install dependencies**:
This project uses [Truffle](https://www.trufflesuite.com/truffle) for compiling and deploying the smart contract.
npm install -g truffle npm install

4. **Modify files** (if necessary):
- Ensure that your `truffle-config.js` is set up for the desired network (e.g., Ganache or a public network).
- Update the contract or migration files if changes are required for your environment.

### Executing Program

1. **Start a local development blockchain (Ganache)**:
- You can use [Ganache](https://www.trufflesuite.com/ganache) for local Ethereum testing. Start Ganache and note the port (default is `7545`).

2. **Compile the contract**:
truffle compile

3. **Migrate the contract** (deploy it to the local blockchain):
truffle migrate --network development

4. **Interact with the contract using Truffle Console**:
truffle console --network development
truffle test


## Help

To see helpful information or debug errors, use the following command in the Truffle console:
help

## Authors

Contributors names and contact info

Eimee Suzanne Marzan


## License

This project is licensed under the MIT License.
