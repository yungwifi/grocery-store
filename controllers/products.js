const store = require('../models/Store')
const product = require('../models/Product')

const productController = {
    index: (req, res) => {
        const storeId = req.params.storesId
        store.findById(storeId)
            .then(store => {
                const products = store.products
                res.send(products)
            })
    },
    show: (req, res) => {
        const storeId = req.params.storesId
        store.findById(storeId)
            .then(store => {
                const product = store.products.id(req.params.productId)
                console.log("PRODUCT", product)
                res.send(product)
            })
    }
}

module.exports = productController