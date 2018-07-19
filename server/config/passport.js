require('dotenv').config()
const passport = require('passport')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy
const passportJWT = require('passport-jwt')
const JWTStrategy = passportJWT.Strategy
const ExtractJWT = passportJWT.ExtractJwt
const model = require('../app/models')

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
function (email, password, done) {
  return model.User.findOne({
    where: {
      email,
      password
    },
    raw: true
  })
  .then(user => {
    if(!user)
      return done(null, false, {message: "Incorrect Email or Password"})
    return done(null, user, {message: "Logged In Succesfully"} )
  })
  .catch(err => {
    return done(err)
  })
}
))

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), 
  secretOrKey: process.env.SECRET
},
function (jwtPayload, done) {
  //find user in db if needed
  return model.User.findOne({
    where: {id: jwtPayload.id}
  })
  .then( user => { return done(null, user)})
  .catch( err => { return done(err) })
}))