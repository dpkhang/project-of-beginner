const express = require('express')
const app = express()
const route = require('./routers/index')
const { engine } = require('express-handlebars')
const path = require('path')
const port = process.env.PORT || 8001

app.engine('hbs', engine({
    extname: "hbs"
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources/views'));

route.routes(app)

app.listen(port)