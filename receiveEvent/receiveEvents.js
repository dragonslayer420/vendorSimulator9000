var Web3 = require('web3');

web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Prmmb8q9E0i0tPw8TDfV'));

console.log(web3.currentProvider);

var addr = "0x047747BE8A6B14886aBb2Ee235EF38821e52BAA2";

console.log('Events by Address: ' + addr);

var abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "product",
                "type": "int256"
            },
            {
                "name": "machineId",
                "type": "int256"
            }
        ],
        "name": "buy",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "_from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "_machineId",
                "type": "int256"
            },
            {
                "indexed": false,
                "name": "_product",
                "type": "int256"
            },
            {
                "indexed": false,
                "name": "_totalCounter",
                "type": "int256"
            }
        ],
        "name": "eventBuy",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "product",
                "type": "int256"
            }
        ],
        "name": "getCount",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "resetCounter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "vs9000Snicker",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "counterCocacola",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "counterSnickers",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "counterSprite",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "counterTwix",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalCounter",
        "outputs": [
            {
                "name": "",
                "type": "int256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
]

var contract = new web3.eth.Contract(abi, addr);

console.log("################################");

// in produktion muss dieser wert persistiert werden, sonst problem beu script neustart
var totCounter = 0;

var exec = require('child_process').exec;

async function poll() {

    while(true) {
        contract.getPastEvents('eventBuy',
            {
                filter: {},
                fromBlock: 0,
                toBlock: 'latest'
            }, function(error, events){ /*optional callback console.log(events); */ })
            .then(function(events){

                for(var i = 0; i<events.length; i++) {

                    if(events[i].returnValues["_totalCounter"] > totCounter) {

                        var _product = events[i].returnValues["_product"];
                        var _machineId = events[i].returnValues["_machineId"];
                        var _totalCounter = events[i].returnValues["_totalCounter"];

                        // console.log("_product: " + _product);
                        // console.log("_machineId: " + _machineId);
                        // console.log("_totalCounter: " + _totalCounter);

                        if(_product == 1) _product = 'a';
                        if(_product == 2) _product = 'b';
                        if(_product == 3) _product = 'c';
                        if(_product == 4) _product = 'd';

                        var execString = "\"shellExec.bat\" " + _product + " " + _machineId;

                        console.log(execString);

                        // https://nodejs.org/api/child_process.html#child_process_child_process_execfile_file_args_options_callback
                        exec(execString, function (error, stdOut, stdErr) {
                            console.log(stdOut);
                        });
                    }
                }
                totCounter = events.length;
            });
        console.log("totalCounter:" + totCounter);
        console.log("before await sleep");

        await sleep(2000);
    }
}

poll();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}