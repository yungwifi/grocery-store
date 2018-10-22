const Store = require(`../models/Store`)

const storeController = {
    index: (req, res) => {
        Store.find({}).populate('products')
            .then(stores => {
                res.send(stores)
            })
    },
    show: (req, res) => {
        const storeId = req.params.storesId
        Store.findById(storeId).populate('products')
            .then((singleStore) => {
                res.send({ singleStore: singleStore })
            })
    },
    new: (req, res) => {
        Store.create(req.body)
            .then(() => {
                res.redirect(`/stores`)
            })
    },
    delete: (req, res) => {
        const storeId = req.params.storesId
        Store.findByIdAndDelete(storeId)
            .then(() => {
                res.redirect(`/stores`)
            })
    },
    update: (req, res) => {
        const storeId = req.params.storesId
        Store.findByIdAndUpdate(storeId, req.body)
            .then((store) => {
                res.redirect(`/stores/${store.id}`)
            })
    }
}

module.exports = storeController