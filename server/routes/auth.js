require('dotenv').config()
const express = require('express')
const router = express.Router();

const jwt = require('jsonwebtoken')
const passport = require('passport')

const authController = require('../app/controllers/authController')

// POST login
router.post('/login', function(req, res, next) {
  passport.authenticate('local', {session: false}, (err, user, info) => {
    // console.log(err)
    console.log(user)
    // console.log('success')
    if (err || !user) {
      return res.status(400).json({
        message: info ? info.message : 'Login failed',
        user: user
      })
    }

    req.login(user, {session: false}, (err) => {
      if (err) {
        res.send(err);
      }

      const token = jwt.sign(user, process.env.SECRET)
      return res.json({user, token})
    })

  })(req, res)
})

// POST register
router.post('/register', passport.authenticate('local-signup', {
  successRedirect: '/post',
  failureRedirect: '/register'
}))

module.exports = router
