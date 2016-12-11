// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var parseUrlEnconded = bodyParser.urlencoded({
  extended: false
});

// MongoDB
mongoose.connect('mongodb://localhost/parking_bee');

// Express
var app = express();

// View Engine
app.set("views", __dirname + "/views");
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from ./public folder
app.use(express.static(path.join(__dirname, 'public')));        

// Routess
	//EJS Routes 
	app.get('/', function(req, res) {
		res.render("order_pizza.ejs");
	});

	app.get('/view_orders', function(req, res) {
		res.render("view_orders.ejs");
	});

//End EJS Routes - sorry really have to put this into a seperate file at some point ...

	app.use('/api_pending', require('./routes/api_pending'));

// Start server
app.listen(9000);
console.log('API is running on port 9000');