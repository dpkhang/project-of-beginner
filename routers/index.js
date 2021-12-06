const homeRouter = require('./home.route')
const productRouter = require('./products.route')
const loginRouter = require('./login.route')
const signupRouter = require('./signup.route')
const homecontroller = require('../controllers/home.controller')


const routes = (app) => {
    app.use('/products', productRouter)
    app.use('/home', homeRouter)
    app.use('/login',loginRouter)
    app.use('/signup',signupRouter)
    app.use('/admin_products',(req,res) => {
        res.render('pages/admin_products', {
            title: 'table | Fishes Shop',
            css:'product-detail.css'
        })
    })

    app.use('/',homecontroller.showListOfFish)
}

module.exports = {
    routes
}