const express = require('express')
const route = express.Router()
const product_controller = require('../controllers/products.controller')

route.post('/add', product_controller.create)
route.post('/update', product_controller.update)
route.post('/delete', product_controller.delete)
route.get('/', product_controller.showListOfFish)

module.exports = route