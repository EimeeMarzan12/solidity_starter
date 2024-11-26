const SmartContractConditions = artifacts.require("SmartContractConditions");

contract("SmartContractConditions", (accounts) => {
  let instance;
  const owner = accounts[0];  // First account is the owner
  const depositor = accounts[1];  // Another account to deposit Ether
  const initialBalance = web3.utils.toWei("1", "ether"); // 1 Ether

  // Before each test, deploy a fresh instance of the contract
  beforeEach(async () => {
    instance = await SmartContractConditions.new();
  });

  // Test: Contract uses require() correctly
  it("should allow deposits and check valid deposit amount with require()", async () => {
    // Deposit 1 Ether into the contract from the depositor account
    await instance.deposit({ from: depositor, value: initialBalance });

    // Get the contract balance after deposit
    const balance = await instance.balance();

    // Assert that the contract balance matches the deposited amount
    assert.equal(balance.toString(), initialBalance, "Contract balance after deposit is incorrect");
  });

  // Test: Contract uses assert() correctly
  it("should verify balance consistency using assert()", async () => {
    // Deposit 1 Ether into the contract
    await instance.deposit({ from: depositor, value: initialBalance });

    // Verify that the stored balance matches the actual Ether balance using assert
    await instance.verifyBalance();
  });

  // Test: Contract uses revert() correctly
  it("should prevent contract reset if balance is non-zero with revert()", async () => {
    // Deposit 1 Ether into the contract
    await instance.deposit({ from: depositor, value: initialBalance });

    // Attempt to reset the contract when balance is non-zero, expect revert
    try {
      await instance.resetContract({ from: owner });
      assert.fail("Reset should fail with non-zero balance");
    } catch (error) {
      assert(error.message.includes("Cannot reset contract while balance is non-zero"), "Expected revert error, got: " + error.message);
    }
  });
});
