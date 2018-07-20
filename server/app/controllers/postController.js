const Post = require('../models').Post;

// display all post
exports.post_list = function (req, res) {
  Post.findAll().then(posts => res.status(200).json(posts))
}

// Get detail post
exports.post_detail = function (req, res) {
  const id = req.params.id
  Post.findById(id).then(post => res.status(200).json(post))
}

// Create Post
exports.post_create_post = function (req, res) {
  Post.create({
    title: 'test',
    content: 'hello world no 2',
    userId: '1'
  }).then(post => {
    res.status(200).json(post)
  }).catch(err => {
    res.status(500).json({message: 'something wrong'})
  })
}

// Delete post
exports.post_delete_post = function (req, res) {
  const id = req.params.id
  Post.findById(id)
  .then(post => {
    post.destroy()
    res.status(200).json({message: 'post deleted'})
  })
  .catch(err => res.status(400).json(err))
}

// Update post
exports.post_update_post = function (req, res) {
  res.send("not implemented yet")
}