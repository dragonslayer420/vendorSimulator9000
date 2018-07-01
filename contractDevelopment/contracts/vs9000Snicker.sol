pragma solidity ^0.4.4;

contract vs9000 {

    uint public counterTwix;
    uint public counterSnickers;
    uint public counterCocacola;
    uint public counterSprite;

    event eventBuy(address indexed _from, int indexed _machineId, int _product);

    function vs9000Snicker() {
        counterTwix = 0;
        counterSnickers = 0;
        counterCocacola = 0;
        counterSprite = 0;
    }

    function buy(int product, int machineId) {

        //twix
        if(product == 1) {
            counterTwix += 1;
        }

        //snickers
        if(product == 2) {
            counterSnickers += 1;
        }

        //cola
        if(product == 3) {
            counterCocacola += 1;
        }

        //sprite
        if(product == 4) {
            counterSprite += 1;
        }

        eventBuy(msg.sender, machineId, product);
    }

    function resetCounter() {
        this.counterTwix = 0;
        this.counterSnickers = 0;
        this.counterCocacola = 0;
        this.counterSprite = 0;
    }

    function getCount(int product) returns (uint) {
        if(product == 1) {
            return counterTwix;
        }

        //snickers
        if(product == 2) {
            return counterSnickers;
        }

        //cola
        if(product == 3) {
            return counterCocacola;
        }

        //sprite
        if(product == 4) {
            return counterSprite;
        }
    }

}