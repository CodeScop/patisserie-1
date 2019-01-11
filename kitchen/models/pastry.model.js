var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var PastrySchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    price: Number
})

PastrySchema.plugin(mongoosePaginate)
const Pastry = mongoose.model('Pastry', PastrySchema)

module.exports = Pastry;