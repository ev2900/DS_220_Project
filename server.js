// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var sendgrid = require("sendgrid")("Sq1OeM4gSDWOtMdEGMaclA"); 

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
	app.get('/', function (request, response) {
	  gateway.clientToken.generate({}, function (err, res) {
	    response.render('index', {
	      clientToken: res.clientToken
	    });
	  });
	});

	app.get('/contact', function(req, res) {
		res.render("contact_us.ejs");
	});

	app.get('/list_your_spot', function(req, res) {
		res.render("list_your_spot.ejs");
	});

	app.get('/login', function(req, res) {
		res.render("login.ejs");
	});

	app.get('/summer_parking_spaces', function(req, res) {
		res.render("summer_parking_spaces.ejs");
	});

	app.get('/thank_you_list/:email/:id', function(req, res) {
		var email_email = req.params.email;
		var id_id = req.params.id;
		res.render("thank_you_list.ejs", {email_email: email_email, id_id: id_id});
	});

	app.get('/thank_you_pay', function(req, res) {
		res.render("thank_you_pay.ejs");
	});

	app.get('/how_it_works', function(req, res) {
		res.render("how_it_works.ejs");
	});

	app.get('/jobs', function(req, res) {
		res.render("jobs.ejs");
	});

	app.get('/detail/:id', function(req, res) {
		var id_url = req.params.id;
		res.render("details.ejs", {id_url: id_url});
	});
//End EJS Routes - sorry really have to put this into a seperate file at some point ...

	app.use('/api', require('./routes/api'));
	app.use('/payment', require('./routes/payment'));
	app.use('/api_pending', require('./routes/api_pending'));

	////////////////////////////////////////////////////
	/// Needs to be seperate files at some point ...///
	///////////////////////////////////////////////////

	// Submit approve/deny to Holden
	app.get('/email_approval/:email/:id', function(req, res) {

		var sendgrid  = require('sendgrid')('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');
		var email = req.params.email;
		var id = req.params.id;

		var email     = new sendgrid.Email({
		  to:       email,
		  from:     'pednekar.ameya@gmail.com',
		  subject:  'A Spot has been listed Approve/Deny',
		  html:     'Hello, <br><br> A spot has just been Submited to be listed. Should we approve or deny this listing? <br><br> The title of the spot which was just listed is ' + id + '<br><br> Please take appropriate action on this listing and make sure to email the spot lister when/if/if not the spot is listed. <br><br> Thank you, <br> Parking Bee Dev Team <3'  
		});

		sendgrid.send(email, function(err, json) {
		  if (err) { return console.error(err); }
		  console.log(json);
		});
	});

	// Submit Conformation to Spot Lister
	app.get('/email_conformation/:email', function(req, res) {

		var sendgrid  = require('sendgrid')('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');
		var email_email = req.params.email;

		var email     = new sendgrid.Email({
		  to:       email_email,
		  from:     'pednekar.ameya@gmail.com',
		  subject:  'Thank you for Listing Your Spot',
		  html:     'Hello, <br><br> Thank you for listing your parking space with ParkingBee! <br><br> Your listing is currently pending approval and you will be notified as soon as it has been approved. If you have any questions in the mean time email us at support@parkingbeeapp.com. <br><br> Thank you, <br> ParkingBee'
		});

		sendgrid.send(email, function(err, json) {
		  if (err) { return console.error(err); }
		  console.log(json);

		});
	});

	// Spot has been Approved and Listed
	app.get('/email_listed/:email/:id', function(req, res) {

		var sendgrid  = require('sendgrid')('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');
		var email = req.params.email;
		var id = req.params.id;

		var email     = new sendgrid.Email({
		  to:        email,
		  from:     'pednekar.ameya@gmail.com',
		  subject:  'Your Spot has been Listed',
		  html:     'Congrates you spot has been listed!'
		});

		sendgrid.send(email, function(err, json) {
		  if (err) { return console.error(err); }
		  console.log(json);
		});
	});

// Brain Tree #2
app.post('/checkout', parseUrlEnconded, function (req, res) {

  var nonceFromTheClient = req.body.payment_method_nonce;

	gateway.transaction.sale({
	  amount: '10.00',
	  paymentMethodNonce: nonceFromTheClient,
	  options: {
	    submitForSettlement: true
	  }
	}, function (err, result) {
	});

});

// Start server
app.listen(9000);
console.log('API is running on port 9000');