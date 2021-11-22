const homeRouter = require('./home.route')
const productRouter = require('./products.route')

const routes = (app) => {
    app.use('/products', productRouter)
    app.use('/home', homeRouter)
    app.use('/', (req, res) => {
        res.render('pages/home')
    })
}

module.exports = {
    routes
}