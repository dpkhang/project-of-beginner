const express = require('express')
const router = express.Router()
const loginController = require('../controllers/login.controller')

router.get('/',loginController.form)
router.get('/signin',loginController.signin)

module.exports = router