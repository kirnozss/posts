const express = require('express')
const router = express.Router()

const {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    getPostById
} = require('../controllers/posts')

const { postValid } = require('../validator/postValid')


router.post('/', postValid, createPost)
router.put('/:id', postValid, updatePost, getPostById)
router.get('/', getPosts)
router.get('/:id', getPostById)
router.delete('/:id', deletePost)


module.exports = router