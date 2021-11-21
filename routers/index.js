const homeRouter = require('./home.route')

const routes = (app) => {

    app.use('/home', homeRouter)
    app.use('/', (req, res) => {
        res.render('products')
    })
}

module.exports = {
    routes,
}