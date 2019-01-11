var Pastry = require('../models/pastry.model.js')

exports.getPastries = async function(query, page, limit){
  var options = {
    page,
    limit
  }
  try {
    var pastries = await Pastry.paginate(query, options);
    return pastries;
  } catch(e){
    throw Error('Many apologies, our pastries are refusing to queue in an orderly fashion.')
  }
}

exports.createPastry = async function(pastry){
  
  var newPastry = new Pastry({
    name: pastry.name,
    quantity: pastry.quantity,
    price: pastry.price
  });

  try {
    var savedPastry = await newPastry.save();
    return savedPastry;
  } catch(e){
    throw Error("Pastry unbaked, sorry.")
  }
}

exports.updatePastry = async function(pastry){
  var id = pastry.id
  try {
    var oldPastry = await Pastry.findById(id);
  } catch(e){
    throw Error("Sorry, we were unable to find that pastry.");
  }

  if(!oldPastry){
    return false;
  }

  console.log(oldPastry);

  oldPastry.name = pastry.name;
  oldPastry.quantity = pastry.quantity;
  oldPastry.price = pastry.price;

  console.log(oldPastry);

  try{
    var savedPastry = await oldPastry.save();
    return savedPastry;
  }catch(e){
    throw Error("Pastry crumbled; update aborted");
  }
}

exports.deletePastry = async function(id){
  try{
    var deleted = await Pastry.deleteOne({_id: id});
    if(deleted.n === 0){
      throw Error("Pastry could not be deleted.")
    }
    return deleted
  } catch(e){
    throw Error("Error occurred while tossing the pastry.")
  }
}