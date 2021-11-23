const express = require('express')
const route = express.Router()
const home_controller = require('../controllers/home.controller')


route.get('/', home_controller.showListOfFish)

module.exports = route