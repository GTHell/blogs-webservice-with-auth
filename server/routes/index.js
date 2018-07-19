// router
const user = require('./user')
const post = require('./post')
const auth = require('./auth')

module.exports = function (app) {
  app.use('/user', user)
  app.use('/post', post)
  app.use('/api', auth)
}
