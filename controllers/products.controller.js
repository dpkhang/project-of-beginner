// const { post } = require("../routers/home.route")
const productsModel = require('../models/product.model')



class Products {
    showListOfFish(req, res) {
        const list_fish = [{
            id: 1,
            name: "Lia thia fish",
            quantity: 10,
            price: 10,
            description: "this is beutiful",
            image: "./image/cavang.png",
        },
        {
            id: 2,
            name: "Lia thia fish",
            quantity: 20,
            price: 20,
            description: "this is beutiful",
            image: "./image/ca2.png",
        },
        {
            id: 3,
            name: "Lia thia fish",
            quantity: 30,
            price: 30,
            description: "this is beutiful",
            image: "./image/ca3.png",
        },
        {
            id: 4,
            name: "Lia thia fish",
            quantity: 40,
            price: 40,
            description: "this is beutiful",
            image: "./image/ca4.png",
        },
        {
            id: 4,
            name: "Lia thia fish",
            quantity: 40,
            price: 40,
            description: "this is beutiful",
            image: "./image/ca1.png",
        },
        ];
        res.render("pages/products", {
            //array:name
            css: 'product.css',
            title: 'Products | Fishes Shop',
            manage_fish: list_fish
        });
    }

    form_add(req, res) {
        res.render('pages/admin_form_add_products', {
            css: 'add_product.css',
            title: 'Add products | Fishes Shop'
        });
    }

    addProduct = async(req, res) => {
        res.send({file: req.file})
        //const name = req.body.name
        const {name,category,image,quantity,price,description}=req.body
        const product ={
            name,
            category,
            image,
            quantity,
            price,
            description
        }
        const result = await productsModel.add(product)
        if(result) {
            return res.send({message: 'Successfully!'})
        }
        return res.send({message: 'Unsuccessfully!'})
    }

    form_detail(req, res) {
        res.render('pages/detail', {
            title: 'Detail | Fishes Shop',
            css:'product-detail.css'
        })
    }
    update(req, res) {

    }
    delete(req, res) {

    }


}

module.exports = new Products();