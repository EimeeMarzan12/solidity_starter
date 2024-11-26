const SmartContractConditions = artifacts.require("SmartContractConditions");

module.exports = function (deployer) {
  deployer.deploy(SmartContractConditions);
};
