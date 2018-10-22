const store = require(`../models/Store`)

const storeController = {
    index: (req, res) => {
        store.find({}).populate('products')
            .then(stores => {
                res.send(stores)
            })
    },
    show: (req, res) => {
        const storeId = req.params.storesId
        console.log(storeId)
        store.findById(storeId).populate('products')
            .then((singleStore) => {
                res.send({ singleStore: singleStore })
            })
    },
    new: (req, res) => {
        console.log(req.body)
        store.create(req.body)
            .then(() => {
                res.redirect(`/stores`)
            })
    },
    delete: (req, res) => {
        const storeId = req.params.storesId
        store.findByIdAndDelete(storeId)
            .then(() => {
                res.redirect(`/stores`)
            })
    },
    update: (req, res) => {
        const storeId = req.params.storesId
        store.findByIdAndUpdate(storeId, req.body)
            .then((store) => {
                res.redirect(`/stores/${store.id}`)
            })
    }
}

module.exports = storeController