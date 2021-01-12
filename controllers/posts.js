const Post = require('../models/posts')

exports.createPost = async (req, res, next) => {
    try {
        const data = req.body
        const date = Date.now()
        const post = await new Post({ ...data, date })

        await post.save()
        res.json(post)

    } catch (e) {
        console.log(e)
        next(e)
    }
}

exports.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find()

        res.json(posts)

    } catch (e) {
        console.log(e)
        next(e)
    }
}

exports.getPostById = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            throw new Error('Post not found')
        }

        res.json(post)

    } catch (e) {
        console.log(e)
        next(e)
    }
}

exports.updatePost = async (req, res, next) => {
    try {
        const data = req.body

        const post = await Post.findByIdAndUpdate(req.params.id, {
            ...data
        })

        if (!post) {
            throw new Error('Post not found')
        }

        res.json('post updated')

    } catch (e) {
        console.log(e)
        next(e)
    }
}

exports.deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            throw new Error('Post not found')
        }

        await post.remove()
        res.json("post deleted")

    } catch (e) {
        console.log(e)
        next(e)
    }
}