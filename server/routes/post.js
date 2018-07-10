const express = require('express')
const router = express.Router()

const post_controller = require('../app/controllers/postController')

// POST create post
router.post('/create', post_controller.post_create_post)

// POST delete post
router.post('/:d/delete', post_controller.post_delete_post)

// POST update post
router.post('/:id/update', post_controller.post_update_post)

// GET request for one post
router.get('/:d', post_controller.post_detail)

// GET request for all posts
router.get('/', post_controller.post_list)

module.exports = router