const express = require('express')
const app = express()
const route = require('./routers')
const { engine } = require('express-handlebars')
const path = require('path')
const dotenv = require('dotenv')
const mysql = require('./config/database')


app.use(express.static(path.join(__dirname, 'public/')))
dotenv.config()

app.engine('hbs', engine({
    extname: "hbs"
}));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

mysql.connect()
route.routes(app)

const port = process.env.PORT || 8001
app.listen(port)