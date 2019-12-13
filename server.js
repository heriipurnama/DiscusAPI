'use strict'

var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = process.env.PORT || 4000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require('./router/Routes')
routes(app)

app.listen(port)
console.log(`RESTful API server started on:${port}`)
