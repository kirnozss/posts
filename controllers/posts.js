const Post = require('../models/posts')

exports.createPost = async (req, res, next) => {
    try {
        const data = req.body
        const date = Date.now()
        const post = await new Post({...data, date})
        
        await post.save()
        res.json(post)

    } catch (e) {
        console.log(e)
        next(e)
    }
}