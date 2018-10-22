const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application')
const storeController = require('../controllers/stores')
const productController = require('../controllers/products')


//read routes 
router.get('/', applicationController.index)
router.get('/stores', storeController.index)
router.get('/stores/:storesId', storeController.show)
router.get('/stores/:storesId/products', productController.index)
router.get('/stores/:storesId/products/:productId', productController.show)

//create routes
router.post('/stores', storeController.new)
router.post('/stores/:storesId/products', productController.new)


//delete routes 
router.delete('/stores/:storesId', storeController.delete)
module.exports = router

//update routes 
router.patch('/stores/:storesId', storeController.update)