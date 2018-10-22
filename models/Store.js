const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Store = new Schema({
    name: String,
    location: String,
    hours: String,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

module.exports = mongoose.model('Store', Store)