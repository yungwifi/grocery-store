const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Store = new Schema({
    name: String,
    location: String,
    hours: String,
    products: []
})

module.exports = mongoose.model('Store', Store)