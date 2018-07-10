const express = require('express')
const router = express.Router()
//user controller
var usersController = require('../app/controllers/userController')

router.get('/', function(req, res){
  usersController.index();
})

module.exports = router