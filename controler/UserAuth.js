'use strict'
const uuidv1 = require('uuid/v1')
const passwordHash = require('password-hash')
const connection = require('../config/Conection')
const helper = require('../utils/Helper')

exports.index = function (_req, res) {
  helper.response('hello from restFullAPI Discus!', res)
}

// Get all data
exports.users = function (req, res) {
  if (typeof req.query.offsets === 'undefined' || typeof req.query.limits === 'undefined') {
    const offset = 0
    const limit = 10
    const sql = `SELECT * FROM User ORDER BY modified_date_user DESC LIMIT ${offset}, ${limit}`
    connection.query(sql, function (_error, rows, _field) {
      if (_error) {
        console.log(_error)
        helper.response(_error, res)
      } else {
        helper.response(rows, res)
      }
    })
  } else {
    const offset = req.query.offsets
    const limit = req.query.limits
    const sql = `SELECT * FROM User ORDER BY modified_date_user DESC LIMIT ${offset}, ${limit}`
    connection.query(sql, function (_error, rows, _field) {
      if (_error) {
        console.log(_error)
        helper.response(_error, res)
      } else {
        helper.response(rows, res)
      }
    })
  }
}

// Get data user by username
exports.findUser = function (req, res) {
  if (typeof req.query.offsets === 'undefined' || typeof req.query.limits === 'undefined') {
    const offset = 0
    const limit = 10
    const username = req.params.username
    const sql = `SELECT * FROM User WHERE username_user LIKE '%${username}%' ORDER BY modified_date_user DESC LIMIT ${offset}, ${limit}`
    connection.query(sql,
      [username],
      function (_error, rows, _field) {
        if (_error) {
          console.log(_error)
          helper.response(_error, res)
        } else {
          helper.response(rows, res)
        }
      })
  } else {
    const offset = req.query.offsets
    const limit = req.query.limits
    const username = req.params.username
    const sql = `SELECT * FROM User WHERE username_user LIKE '%${username}%' ORDER BY modified_date_user DESC LIMIT ${offset}, ${limit}`
    connection.query(sql, function (_error, rows, _field) {
      if (_error) {
        console.log(_error)
        helper.response(_error, res)
      } else {
        helper.response(rows, res)
      }
    })
  }
}

// insert data
exports.insertUser = async function (req, res) {
  const idUser = uuidv1()
  const datas = req.body.data
  const firstname = datas.firstname
  const lastname = datas.lastname
  const username = datas.username
  const password = passwordHash.generate(datas.password)
  const createdDate = helper.dateFormat()
  const modifiedDate = helper.dateFormat()
  const sql = `INSERT INTO User (id_user, firstname_user, lastname_user, username_user,
                 password_user, created_date_user, modified_date_user )
               VALUES ('${idUser}','${firstname}', '${lastname}', '${username}', '${password}','${createdDate}', '${modifiedDate}' )`
  connection.query(sql,
    function (_error, _rows, _fields) {
      if (_error) {
        console.log(_error)
        helper.response(_error, res)
      } else {
        helper.response(datas, res)
      }
    })
}

// Update user
exports.updateUser = function (req, res) {
  const idUser = req.params.id
  const datas = req.body.data
  const firstname = datas.firstname
  const lastname = datas.lastname
  const username = datas.username
  const password = passwordHash.generate(datas.password)
  const modifiedDate = helper.dateFormat()
  const sql = `UPDATE User SET firstname_user = '${firstname}', lastname_user = '${lastname}',
                username_user = '${username}', password_user = '${password}', modified_date_user = '${modifiedDate}'
               WHERE id_user = '${idUser}'`

  connection.query(sql,
    function (_error, _rows, _fields) {
      if (_error) {
        console.log(_error)
        helper.response(_error, res)
      } else {
        helper.response(datas, res)
      }
    })
}

// Delete one Data
exports.deleteUser = function (req, res) {
  const idUser = req.body.data.idUser
  const sql = `DELETE FROM User WHERE id_user='${idUser}'`

  connection.query(sql,
    function (error, _rows, _field) {
      if (error) {
        console.log(error)
        helper.response(error, res)
      } else {
        helper.response(req.body.data, res)
      }
    })
}

// Delete All Data
exports.deleteAllUser = function (req, res) {
  const values = 'Succesfull Deleted'
  const sql = 'DELETE FROM User'
  connection.query(sql,
    function (error, _rows, _field) {
      if (error) {
        console.log(error)
        helper.response(error, res)
      } else {
        helper.response(values, res)
      }
    })
}
