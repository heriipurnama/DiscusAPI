'use strict'

const helper = require('../utils/Helper')
const { exec } = require('child_process')

// Database connection settings.
const exportFrom = {
  host: '127.0.0.1',
  user: 'root',
  password: 'Root123!',
  database: 'discus_db'
}
// the file be located
const dumpFile = 'discus_db.sql'

exports.exportDb = async function (req, res) {
  const values = 'Succes Import!'
  exec(`mysqldump -u${exportFrom.user} -p${exportFrom.password} -h${exportFrom.host} --compact ${exportFrom.database} > ${dumpFile}`,
    (_error, stdout, stderr) => {
      if (_error) {
        console.log(_error)
        helper.response(_error, res)
      } else {
        helper.response(values, res)
      }
    })
}
