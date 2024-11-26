// SPDX-License-Identifier: MIT
pragma solidity ^0.8.21;

contract SmartContractConditions {
    // State variables
    address public owner;
    uint256 public balance;

    // Constructor to initialize the contract owner
    constructor() {
        owner = msg.sender; // Set the deployer as the owner
    }

    // Modifier to check if the caller is the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    // Function to deposit Ether to the contract
    function deposit() external payable {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        balance += msg.value;
    }

    // Function to withdraw Ether by the owner
    function withdraw(uint256 amount) external onlyOwner {
        require(amount <= balance, "Insufficient balance");
        balance -= amount;
        payable(owner).transfer(amount);
    }

    // Function to demonstrate the use of assert()
    function verifyBalance() external view {
        // Check if the stored balance matches the contract's actual Ether balance
        assert(address(this).balance == balance);
    }

    // Function to reset the contract's state (only owner can reset)
    function resetContract() external onlyOwner {
        if (balance > 0) {
            revert("Cannot reset contract while balance is non-zero");
        }
        owner = address(0); // Reset the owner to address(0)
    }
}
