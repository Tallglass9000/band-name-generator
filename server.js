var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = process.env.PORT || 3000;
var Adjective = require("./lib/adjective");
var Verb = require("./lib/verb");
var Noun = require("./lib/noun");
var getRandomWord = require("./lib/getRandomWord");
var postWord = require("./lib/postWord");

var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(express.static(__dirname + "/app"));

app.get("/adjective", function (req, res) {
	res.json(getRandomWord(adjective));
});

app.get("/verb", function (req, res) {
	res.json(getRandomWord(verb));
});

app.get("/noun", function (req, res) {
	res.json(getRandomWord(noun));
});

app.post("/adjective", function (req, res) {
	res.json(postWord(req.body.word, adjective));
});

app.post("/verb", function (req, res) {
	res.json(postWord(req.body.word, verb));
});

app.post("/noun", function (req, res) {
	res.json(postWord(req.body.word, noun));
});

app.get("/", function (req, res) {
	res.sendFile("index.html");
});

app.listen(port, function() {
	console.log('server starting. available at http://localhost:' + port);
});






