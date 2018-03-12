var vs9000Snicker = artifacts.require("./vs9000Snicker.sol");

module.exports = function(deployer) {
    deployer.deploy(vs9000Snicker, 1);
};
