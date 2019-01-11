var express = require('express');
var router = express.Router();

var PastryController = require('../../controllers/pastry.controller.js');

router.get('/', PastryController.getPastries);
router.post('/', PastryController.createPastry);
router.put('/', PastryController.updatePastry);
router.delete('/:id', PastryController.removePastry);

module.exports = router;