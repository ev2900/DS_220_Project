
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var spotSchema = new mongoose.Schema({
	id: String,
	number: String,
	security_code: String,
	month: String,
	year: String
});

// Return model
module.exports = restful.model('pay', spotSchema);