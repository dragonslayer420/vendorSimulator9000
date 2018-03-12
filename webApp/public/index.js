// contract deployed in remix tested with truffle
var contractAddress = "0x3ab5d11c330d1fd986ce39e515dc1c63bf3903c8";
var abi = [
    {
        "constant": true,
        "inputs": [],
        "name": "counter",
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
        "inputs": [
            {
                "name": "_counter",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "buySnickers",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
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
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

var myweb3 = new Web3(web3.currentProvider);

var buySnickersButton = document.querySelector("#buySnickersButton");
var getCountButton = document.querySelector("#getCountButton");
var resetCountButton = document.querySelector("#resetCountButton");

buySnickersButton.addEventListener("click", function() {

    var contract = myweb3.eth.contract(abi);
    var instance = contract.at(contractAddress);

    var  txnObject = {
        from: myweb3.eth.defaultAccount,
        gas: 26720
    };

    instance.buySnickers.sendTransaction(txnObject, function(error, result)  {

        if(error) console.log(error);
        else {
            console.log(result);
        }
    });

});