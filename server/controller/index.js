const express = require('express')

const router = express.Router();

const users = require('./users')

const posts = require('./posts')

router.get('/', posts.getPosts)

router.get('/users', users.getUsers )






module.exports = router;