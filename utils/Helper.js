'use strict'

exports.dateFormat = function () {
  const dateOb = new Date()
  const date = ('0' + dateOb.getDate()).slice(-2)
  const month = ('0' + (dateOb.getMonth() + 1)).slice(-2)
  const year = dateOb.getFullYear()
  const hours = dateOb.getHours()
  const minutes = dateOb.getMinutes()
  const seconds = dateOb.getSeconds()
  const result = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds
  return result
}

exports.response = function (values, res) {
  if (typeof values.errno === 'undefined') {
    const data = {
      status: 200,
      information: 'OK',
      values: values
    }
    res.json(data)
    res.end()
  } else {
    const data = {
      status: 500,
      information: 'Internal Server Error!'
    }
    res.json(data)
    res.end()
  }
}
