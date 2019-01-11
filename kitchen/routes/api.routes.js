var express = require('express')

var router = express.Router()
var pastries = require('./api/pastries.route')


router.use('/pastries', pastries);


module.exports = router;