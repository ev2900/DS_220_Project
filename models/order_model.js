
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var order = new mongoose.Schema({
	firstName: String,
	lastName: String,
	phoneNumber: String,
	type: String,
	address: String,
	ccNumber: String,
	ccName: String,
	ccExperationDate: String,
	ccSecurityCode: String
});

// Return model
module.exports = restful.model('order', order);