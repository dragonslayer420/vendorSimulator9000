var express = require("express");
var app = express();

var Web3 = require("web3");
var myweb3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/Prmmb8q9E0i0tPw8TDfV"));

console.log("Connected: ", myweb3.isConnected(), myweb3.currentProvider);
console.log("syncing: ", myweb3.eth.syncing, ", Latest Block: ", myweb3.eth.blockNumber);

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
    res.render("index");
});

//server listens to port 3000
app.listen(3000, function() {
    console.log("server started");
});