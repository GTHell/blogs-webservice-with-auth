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
  const createPost = req.body

  Post.create(createPost)
  .then(post => {
    res.status(200).json(post)
  }).catch(err => {
    res.status(501).json({message: 'something wrong'})
  })
}

// Delete post
exports.post_delete_post = function (req, res) {
  const id = req.params.id
  Post.destroy({
    where: {id}
  })
  .then(post => {
    post.destroy()
    res.status(200).json({message: 'post deleted', post})
  })
  .catch(err => res.status(501).json(err))
}

// Update post
exports.post_update_post = function (req, res) {
  const id = req.params.id
  const updates = req.body

  Post.findById(id)
  .then(post => post.updateAttributes(updates))
  .then(updatedPost => res.status(200).json(updatedPost))
  .catch(err => res.status(501).json(err))
}