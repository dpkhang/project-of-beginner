const homeRouter = require('./home.route')

const routes = (app) => {

    app.use('/home', homeRouter)
    app.use('/', (req, res) =>{
        res.send('my app')
    })
}

module.exports = {
    routes,
}