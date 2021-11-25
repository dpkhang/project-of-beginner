const express = require('express')
const app = express()
const route = require('./routers')
const { engine } = require('express-handlebars')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', engine({
    extname: "hbs"
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

route.routes(app)

const port = process.env.PORT || 8001
app.listen(port)