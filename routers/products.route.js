const express = require('express')
const route = express.Router()
const product_controller = require('../controllers/products.controller')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/image/products')
    },   //file dit
    filename: (req, file, cb)=>{
        cb(null, `${file.fieldname}-${Date.now}-${file.originalname}}`)
    }
})

const upload = multer({
    storage: storage
})


route.get('/form-add', product_controller.form_add)
route.post('/add-product', upload.single('file'), product_controller.addProduct)
route.post('/update', product_controller.update)
route.post('/delete', product_controller.delete)
route.get('/detail', product_controller.form_detail)
route.get('/', product_controller.showListOfFish)
module.exports = route