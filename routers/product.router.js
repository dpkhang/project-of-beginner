const express = require('express')
const route = express.Router()


route.get('/add')
route.get('/', (req, res) => {
    res.render('pages/products')
})

module.exports = route