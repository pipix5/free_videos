const express = require('express')
const path = require('path')
const port = 3000
const route = require('./routes')
const db = require('./config/db')

// express instance
const app = express()

// connect to database
db.connect()

// route
route(app)

// apple temlate engine
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.listen(port, (req, res) => {
	console.log('Listening at localhost:' + port)
})