
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var spotSchema_pending = new mongoose.Schema({
	firstName: String,
	lastName: String,
	phoneNumber: String,
	type: String,
	adress: String,
	ccnumber: String,
	ccname: String,
	ccexperationdate: String,
	ccsecuritycode: String
});

// Return model
module.exports = restful.model('order', order);