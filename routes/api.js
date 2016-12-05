
// Dependencies
var express = require('express');
var router = express.Router();

//Models
var Spot = require('../models/spot');

// Routes
Spot.methods(['get', 'put', 'post', 'delete']);
Spot.register(router, '/spots');

// Return router
module.exports = router;