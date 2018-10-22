const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const storeController = require('../controllers/stores')
const productController = require('../controllers/products')


//read routes 
router.get('/', applicationController.index)
router.get('/stores', storeController.index)
router.get('/stores/new', storeController.new)
router.get('/stores/:storesId/edit', storeController.edit)
router.get('/stores/:storesId', storeController.show)
router.get('/stores/:storesId/products', productController.index)
router.get('/stores/:storesId/products/new', productController.new)
router.get('/stores/:storesId/products/:productId', productController.show)
router.get('/stores/:storesId/products/:productId/edit', productController.edit)

//create routes
router.post('/stores', storeController.create)
router.post('/stores/:storesId/products', productController.create)

//delete routes 
router.delete('/stores/:storesId', storeController.delete)
router.delete('/stores/:storesId/products/:productId', productController.delete)

//update routes 
router.patch('/stores/:storesId', storeController.update)
router.patch('/stores/:storesId/products/:productId', productController.update)

module.exports = router