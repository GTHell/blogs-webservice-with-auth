const express = require('express')
const router = express.Router()
const passport = require('passport')

const post_controller = require('../app/controllers/postController')

// POST create post
router.post('/', passport.authenticate('jwt', {session: false}), post_controller.post_create_post)

// POST delete post
router.delete('/:id', passport.authenticate('jwt', {session: false}), post_controller.post_delete_post)

// POST update post
router.patch('/:id', passport.authenticate('jwt', {session: false}), post_controller.post_update_post)

// GET request for one post
router.get('/:id', post_controller.post_detail)

// GET request for all posts
router.get('/', post_controller.post_list)

module.exports = router