const Store = require('../models/Store')
const Product = require('../models/Product')

const productController = {
    index: (req, res) => {
        const storeId = req.params.storesId
        Store.findById(storeId).populate(`products`)
            .then(store => {
                const products = store.products
                res.send(products)
            })
    },
    show: (req, res) => {
        const productId = req.params.productId
        Product.findById(productId)
            .then(product => {
                console.log(`PRODUCT`, product)
                res.send(product)
            })
    },
    new: (req, res) => {
        const storeId = req.params.storesId
        Store.findById(storeId)
            .then(store => {
                const products = store.products
                Product.create(req.body)
                    .then(newProduct => {
                        products.push(newProduct)
                        store.save()
                        res.redirect(`/stores/${storeId}`)
                    })

            })
    },
    delete: (req, res) => {
        const storeId = req.params.storesId
        const productId = req.params.productId
        Product.findByIdAndDelete(productId)
            .then(() => {
                res.redirect(`/stores/${storeId}`)
            })
    }
}

module.exports = productController