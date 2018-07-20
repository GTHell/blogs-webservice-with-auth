require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const sequelize = require('../config/database')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())

// passport
require('../config/passport')

app.get('/', function (req, res) {
  const model = require('../app/models')

  model.User.findOne({
    where: {
      email: 'l@l.com'
    }
  }).then(user => {
    if(!user){
      res.json({"message": "not found"})
      return
    }
    res.json(user)
  })
})

// routes
const route = require('../routes')(app)

app.get('/posts', (req, res) => {
  res.send([{
    title: 'Hello world',
    description: 'Hi how is it going?'
  }])
})

app.listen(process.env.PORT || 8081)