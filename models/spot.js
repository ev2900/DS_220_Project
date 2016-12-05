
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var spotSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
	phoneNumber: String,
	title: String,
	type: String,
	adress: String,
	description: String,
	start: String,
	end: String,
	rate: String,
	additionalInfro: String
});

// Return model
module.exports = restful.model('spots', spotSchema);