
// Dependencies
var express = require('express');
var router = express.Router();

//Models
var Spot_pending = require('../models/order_pizza');

// Routes
Spot_pending.methods(['get', 'put', 'post', 'delete']);
Spot_pending.register(router, '/order_pizza');

// Return router
module.exports = router;