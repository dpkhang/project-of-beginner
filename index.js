const express = require('express')
const app = express()
const route = require('./routers/index')

const port = process.env.PORT || 8001

route.routes(app)

app.listen(port)