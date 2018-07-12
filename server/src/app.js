require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const sequelize = require('../config/database')

// router
const user = require('../routes/user')
const post = require('../routes/post')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', function (req, res) {
  var model = require('../app/models')
  var data = model.Post.find({
    include: [{
      model: model.Tag,
      as: 'tags',
      required: false,
      attributes: ['id', 'name'],
      through: {attributes: []}
    }],
    where: {id: 1}
  }).then(response => res.send(response))
  // res.json(data)
})

app.use('/user', user)
app.use('/post', post)

app.get('/posts', (req, res) => {
  res.send([{
    title: 'Hello world',
    description: 'Hi how is it going?'
  }])
})

app.listen(process.env.PORT || 8081)