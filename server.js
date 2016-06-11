var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res){
	var width = req.query["w"];
	var height = req.query["h"];
	var text = req.query["text"];
	console.log("Text: " + text);
	console.log("Width: " + width);
	console.log("Height: " + height);
})

app.listen(8000, function(err){console.log("Listening localhost:8000")});
