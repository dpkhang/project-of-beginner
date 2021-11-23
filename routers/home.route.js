const express = require('express')
const route = express.Router()
const product_controller = require('../controllers/products.controller')


route.get('/', product_controller.showListOfFish)

module.exports = route