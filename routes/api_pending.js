
// Dependencies
var express = require('express');
var router = express.Router();

//Models
var Spot_pending = require('../models/order_pizza');

// Routes
Spot_pending.methods(['get', 'put', 'post', 'delete']);
Spot_pending.register(router, '/spots_pending');

// Return router
module.exports = router;