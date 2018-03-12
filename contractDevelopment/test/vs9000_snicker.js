var vs9000Snicker = artifacts.require("./vs9000Snicker.sol");

contract("vs9000Snicker", function(accounts) {
    it("should assert true", function() {

        var vs9000_snicker;

        return vs9000Snicker.deployed().then(function(instance) {

            vs9000_snicker = instance;
            return vs9000_snicker.buySnickers.call();

        }).then(function(result) {

            return vs9000_snicker.getCount.call();

        }).then(function(result) {

            assert.equal("1", result, "count should be 1");

        });
    });
});




