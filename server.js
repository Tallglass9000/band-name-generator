var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.get("/", function (req, res) {
	res.send("hello universe");
});

app.listen(port, function() {
	console.log('server starting. available at http://localhost:' + port);
});

var myArray = ["String One", "String Two", "String Three"];
 
var returnRandomString = function(array) {
	var getRandomNumber = Math.floor(Math.random() * array.length);
	return array[getRandomNumber];
};

app.get("/randomstring", function (req, res) {
	res.send(returnRandomString(myArray));
});

var adjectives = [
"awesome",
"fantastic",
"amazing",
"fabulous",
"beautiful",
"marvelous",
];

var returnRandomAdjective = function(adjectives) {
	var getRandomAdj = Math.floor(Math.random() * adjectives.length);
	return adjectives[getRandomAdj];
};

app.get("/adjective", function (req, res) {
	res.send(returnRandomAdjective(adjectives));
});
