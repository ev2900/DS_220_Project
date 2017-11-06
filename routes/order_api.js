/*
['get', 'put', 'post', 'delete'] on http://<ip>:9000/order/pizza
*/

// Dependencies
var express = require('express');
var router = express.Router();

//Models
var Spot_pending = require('../models/order_model');

// Routes
Spot_pending.methods(['get', 'put', 'post', 'delete']);
Spot_pending.register(router, '/pizza');

// Return router
module.exports = router;