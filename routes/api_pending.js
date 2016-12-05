
// Dependencies
var express = require('express');
var router = express.Router();

//Models
var Spot_pending = require('../models/spot_pending');

// Routes
Spot_pending.methods(['get', 'put', 'post', 'delete']);
Spot_pending.register(router, '/spots_pending');

// Return router
module.exports = router;