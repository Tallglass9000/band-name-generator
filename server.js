var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var Adjective = require('./lib/adjective');
var getRandomWord = require('./lib/getRandomWord');

var adjective = new Adjective();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(__dirname + "/app"));

var Verb = function() {
	this.sleeping = true;
	this.skiing = true;
	this.flopped = true;
	this.waiting = true;
	this.plotting = true;
	this.burping = true;
	this.sneezing = true;
	this.flying = true;
	this.snoozing = true;
	this.dancing = true;
};
var verb = new Verb();

var Noun = function() {
	this.ninjas = true;
	this.cowboys = true;
	this.bears = true;
	this.beats = true;
	this.alligators = true;
	this.hamsters = true;
	this.otters = true;
	this.helicopters = true;
	this.unicorns = true;
	this.rhymes = true;
};
var noun = new Noun();

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
"running", 
"jumping",
"singing",
"dancing",
"programming",
"eating",
"sleeping"
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

var myArray = ["String One", "String Two", "String Three"];
var returnRandomString = function(array) {
	var getRandomNumber = Math.floor(Math.random() * array.length);
	return array[getRandomNumber];
};

function postWord(word, wordObject) {
	var msg;
	if (wordObject.hasOwnProperty(word)) {
		msg = "We already have your awesome word: " + word;
	} else {
		wordObject[word] = true;
		console.dir(wordObject);
		msg = "Thanks for submitting " + word + "!";
	}
	return {message: msg, confirm: word}
}

app.get("/adjective", function (req, res) {
	res.json(getRandomWord(adjective));
});

app.get("/verb", function (req, res) {
	res.json(getRandomWord(verb));
});

app.get("/noun", function (req, res) {
	res.json(getRandomWord(noun));
});

app.get("/adjectives", function (req, res) {
	res.send(returnRandomAdjective(adjectives));
});

app.get("/verbs", function (req, res) {
	res.send(returnRandomVerb(verbs));
});

app.get("/nouns", function (req, res) {
	res.send(returnRandomNoun(nouns));
});
/*
app.get("/hello", function (req, res) {
	res.send("hello universe");
});

app.get("/randomstring", function (req, res) {
	res.send(returnRandomString(myArray));
});

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/app/index.html");
});
*/
app.post("/adjective", function (req, res) {
	res.json(postWord(req.body.word, adjective));
});

app.get("/", function (req, res) {
	res.sendFile("index.html");
});

app.listen(port, function() {
	console.log('server starting. available at http://localhost:' + port);
});






