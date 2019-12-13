'use strict'

const mysql = require('mysql')

const dev = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Root123!',
  database: 'discus_db'
})

const prod = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Root123!',
  database: 'discus_db'
})

dev.connect(function (err) { if (err) throw err })

module.exports = dev
