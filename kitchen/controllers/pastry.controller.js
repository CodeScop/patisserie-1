var PastryService = require('../services/pastry.service.js');

var Pastry = require('../models/pastry.model.js')

exports.getPastries = async function(req, res, next){
  var page = req.query.page ? req.query.page : 1;
  var limit = req.query.limit ? req.query.limit : 10; 

  try{
    var pastries = await PastryService.getPastries({}, page, limit);
    return res.status(200).json({status: 200, data: pastries, message: "Successfully Retrieved pastries"})
  } catch(e){
    return res.status(400).json({status: 400, message: e.message});
  }
}

exports.createPastry = async function(req, res, next){
  var pastry = {
    name: req.body.name,
    quantity: req.body.quantity,
    price: req.body.price
  }

  try{
    var createdPastry = await PastryService.createPastry(pastry);
    return res.status(201).json({status: 201, data: createdPastry, message: "Successfully baked pastry!"})
  } catch(e){
    return res.status(400).json({status: 400, message: e.message});
  }
  
}

exports.updatePastry = async function(req, res, next){

  if(!req.body._id){
    return res.status(400).json({status: 400, message: "ID must be present."});
  }

  var id = req.body._id;
  console.log(req.body);

  var pastry = {
    id,
    name: req.body.name ? req.body.name : null,
    quantity: req.body.quantity ? req.body.quantity : null,
    price: req.body.price ? req.body.price : null
  }

  try{
    var updatedPastry = await PastryService.updatePastry(pastry);
    return res.status(200).json({status: 200, data: updatedPastry, message: "Successfully baked pastry!"})
  } catch(e){
    return res.status(400).json({status: 400, message: e.message});
  }
}

exports.removePastry = async function(req, res, next){
  var id = req.params.id;

  try{
    var deleted = await PastryService.deletePastry(id);
    return res.status(204).json({status: 204, message: "Successfully removed pastry."});
  } catch(e){
    return res.status(400).json({status: 400, message: e.message});
  }
}