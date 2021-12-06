const express = require('express')
const route = express.Router()
const signupController= require('../controllers/signup.controller')

route.post('/add', signupController.signup)
route.get("/",signupController.form)

module.exports = route