const express = require('express')
const router = express.Router()

const {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    getPostById
} = require('../controllers/posts')


router.post('/', createPost)
router.put('/:id', updatePost)
router.get('/', getPosts)
router.get('/:id', getPostById)
router.delete('/:id', deletePost)


module.exports = router