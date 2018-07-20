// router
const user = require('./user')
const post = require('./post')
const auth = require('./auth')

module.exports = function (app) {
  app.use('/api/user', user)
  app.use('/api/post', post)
  app.use('/api', auth)
}
