// contract deployed in remix tested with truffle
var contractAddress = "0xf663F44B4d64A462288501b1Ab5a7Ab023013402";
var abi =[
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
        "name": "vs9000Snicker",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
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
        "constant": false,
        "inputs": [],
        "name": "resetCounter",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
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
    }
]

var myweb3 = new Web3(web3.currentProvider);

var buySnickersButton = document.querySelector("#buySnickersButton");
var buyTwixButton = document.querySelector("#buyTwixButton");
var buySpriteButton = document.querySelector("#buySpriteButton");
var buyCocaColaButton = document.querySelector("#buyCocaColaButton");


buySnickersButton.addEventListener("click", function() {
    var contract = myweb3.eth.contract(abi);
    var instance = contract.at(contractAddress);

    var  txnObject = {
        from: myweb3.eth.defaultAccount,
        gas: 26720
    };

    instance.buy.sendTransaction(4,1,txnObject, function(error, result)  {

        if(error) console.log(error);
        else {
            console.log(result);
        }
    });
});

buyTwixButton.addEventListener("click", function() {
    var contract = myweb3.eth.contract(abi);
    var instance = contract.at(contractAddress);

    var  txnObject = {
        from: myweb3.eth.defaultAccount,
        gas: 26720
    };

    instance.buy.sendTransaction(4, 2, txnObject, function(error, result)  {

        if(error) console.log(error);
        else {
            console.log(result);
        }
    });
});

buyCocaColaButton.addEventListener("click", function() {
    var contract = myweb3.eth.contract(abi);
    var instance = contract.at(contractAddress);

    var  txnObject = {
        from: myweb3.eth.defaultAccount,
        gas: 26720
    };

    instance.buy.sendTransaction(4, 3, txnObject, function(error, result)  {

        if(error) console.log(error);
        else {
            console.log(result);
        }
    });
});

buySpriteButton.addEventListener("click", function() {
    var contract = myweb3.eth.contract(abi);
    var instance = contract.at(contractAddress);

    var  txnObject = {
        from: myweb3.eth.defaultAccount,
        gas: 26720
    };

    instance.buy.sendTransaction(4, 4, txnObject, function(error, result)  {

        if(error) console.log(error);
        else {
            console.log(result);
        }
    });
});


