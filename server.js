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

	app.get('/list_your_spot', function(req, res) {
		res.render("list_your_spot.ejs");
	});

	app.get('/summer_parking_spaces', function(req, res) {
		res.render("summer_parking_spaces.ejs");
	});

	app.get('/thank_you_list/:email/:id', function(req, res) {
		var email_email = req.params.email;
		var id_id = req.params.id;
		res.render("thank_you_list.ejs", {email_email: email_email, id_id: id_id});
	});

//End EJS Routes - sorry really have to put this into a seperate file at some point ...

	app.use('/api', require('./routes/api'));
	app.use('/payment', require('./routes/payment'));
	app.use('/api_pending', require('./routes/api_pending'));

// Start server
app.listen(9000);
console.log('API is running on port 9000');