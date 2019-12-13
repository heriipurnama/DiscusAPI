'use strict'

module.exports = async function (app) {
  const userAuth = require('../controler/UserAuth')
  const exportDb = require('../controler/ExportDb')

  // userAuth
  app.route('/').get(userAuth.index)
  app.route('/users').get(userAuth.users)
  app.route('/user/:username').get(userAuth.findUser)
  app.route('/user/insertUser').post(userAuth.insertUser)
  app.route('/user/updateUser/:id').put(userAuth.updateUser)
  app.route('/user/deleteUser').delete(userAuth.deleteUser)
  app.route('/user/deleteAllUser').delete(userAuth.deleteAllUser)

  // Export Db
  app.route('/exportDb').get(exportDb.exportDb)
}
