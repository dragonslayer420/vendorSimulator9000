pragma solidity ^0.4.4;

contract vs9000Snicker {

    uint public counter;

    function vs9000Snicker(uint _counter) {
        counter = _counter;
    }

    function buySnickers() returns (bool) {
        counter = counter + 1;
        return true;
    }

    function getCount() returns (uint) {
        return counter;
    }

    function resetCounter() returns (bool) {
        counter = 0;
        return true;
    }
}
