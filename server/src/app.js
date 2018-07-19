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
// app.use(session({ secret: 'gthell pubg fornite',resave: true, saveUninitialized:true})); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions

app.get('/', function (req, res) {
  // var data = model.Post.find({
  //   include: [{
  //     model: model.Tag,
  //     as: 'tags',
  //     required: false,
  //     attributes: ['id', 'name'],
  //     through: {attributes: []}
  //   }],
  //   where: {id: 1}
  // }).then(response => res.send(response))

  // model.Post.findById(1, {
  //   include: [{
  //     model: model.Category
  //   }]
  // }).then(data => res.send(data))

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

const model = require('../app/models')

// routes
const route = require('../routes')(app)

app.get('/posts', (req, res) => {
  res.send([{
    title: 'Hello world',
    description: 'Hi how is it going?'
  }])
})

app.listen(process.env.PORT || 8081)