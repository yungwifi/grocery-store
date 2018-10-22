const store = require('../models/Store')
const product = require('../models/Product')

const applicationController = {
    index: (req, res) => {
        res.send("Hey whats up this is app index")
    }
}

module.exports = applicationController