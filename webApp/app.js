var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));


var apiUrl = "https://ropsten.infura.io/Prmmb8q9E0i0tPw8TDfV";

app.get("/", function(req, res) {
    res.render("index");
});

//server listens to port 3000
app.listen(3000, function() {
    console.log("server started");
});