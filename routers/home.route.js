const express = require('express')
const route = express.Router()


route.get('/page2', (req, res)=>{
    res.send('page 2')
})

route.get('/page1', (req, res) =>{
    res.send('page 1')
})

route.get('/', (req, res) => {
    res.send('home page')
})

module.exports = route