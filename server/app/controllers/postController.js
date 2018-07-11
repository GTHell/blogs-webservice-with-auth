const Post = require('../models/post')
const models = require('../models');

// display all post
exports.post_list = function (req, res) {
  models.Post.findAll().then(posts => res.json(posts))
}

// Get detail post
exports.post_detail = function (req, res) {
  const id = req.params.id
  models.Post.findById(id).then(post => res.json(post))
}

// Create Post
exports.post_create_post = function (req, res) {
  res.send("not implemented yet")
}

// Delete post
exports.post_delete_post = function (req, res) {
  res.send("not implemented yet")
}

// Update post
exports.post_update_post = function (req, res) {
  res.send("not implemented yet")
}