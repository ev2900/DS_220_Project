
// Dependencies
var express = require('express');
var router = express.Router();

//Models
var Spot = require('../models/pay');

// Routes
Spot.methods(['get', 'put', 'post', 'delete']);
Spot.register(router, '/payment');

//
//router.get('/payment:id', function(req, res) {
//	var id_url = req.params.id;
//});

// Return router
module.exports = router;