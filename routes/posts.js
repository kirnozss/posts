const express = require('express')
const router = express.Router()

const {createPost} = require('../controllers/posts')

router.post('/', createPost)

module.exports = router