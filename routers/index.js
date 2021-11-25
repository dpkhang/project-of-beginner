const homeRouter = require('./home.route')
const productRouter = require('./products.route')
const loginRouter = require('./login.route')
const homecontroller = require('../controllers/home.controller')


const routes = (app) => {
    app.use('/products', productRouter)
    app.use('/home', homeRouter)
    app.use('/login',(req,res) => {
        res.render('pages/login')
    })
    app.use('/signup',(req,res) => {
        res.render('pages/signup')
    })
    app.use('/detail',(req,res) => {
        res.render('pages/detail')
    })

    app.use('/',homecontroller.showListOfFish)
}

module.exports = {
    routes
}