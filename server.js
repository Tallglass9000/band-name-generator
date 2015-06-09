var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var myArray = ["String One", "String Two", "String Three"];
var returnRandomString = function(array) {
	var getRandomNumber = Math.floor(Math.random() * array.length);
	return array[getRandomNumber];
};

var adjectives = [
"awesome",
"fantastic",
"amazing",
"fabulous",
"beautiful",
"marvelous"
];
var returnRandomAdjective = function(adjectives) {
	var getRandomAdj = Math.floor(Math.random() * adjectives.length);
	return adjectives[getRandomAdj];
};

var verbs = [
"run", 
"jump",
"sing",
"dance",
"program",
"eat",
"sleep"
];
var returnRandomVerb = function(verbs) {
	var getRandomVerb = Math.floor(Math.random() * verbs.length);
	return verbs[getRandomVerb];
};

var nouns = [
"cat", 
"dog",
"table",
"chair",
"bird",
"fish"
];
var returnRandomNoun = function(nouns) {
	var getRandomNoun = Math.floor(Math.random() * nouns.length);
	return nouns[getRandomNoun];
};

app.get("/adjective", function (req, res) {
	res.send(returnRandomAdjective(adjectives));
});

app.get("/verb", function (req, res) {
	res.send(returnRandomVerb(verbs));
});

app.get("/noun", function (req, res) {
	res.send(returnRandomNoun(nouns));
});

app.listen(port, function() {
	console.log('server starting. available at http://localhost:' + port);
});

app.get("/hello", function (req, res) {
	res.send("hello universe");
});

app.get("/randomstring", function (req, res) {
	res.send(returnRandomString(myArray));
});

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/app/index.html");
});

app.use(express.static(__dirname + "/app"));


