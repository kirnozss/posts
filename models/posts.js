const mongoose = require('mongoose')
const { Schema } = mongoose

const Post = new Schema({
    user_id: {
        type: String
    },
    title: {
        type: String
    },
    text: {
        type: String
    },
    date: {
        type: Date
    },
    country_id: {
        type: String
    },
    language_id: {
        type: String
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Post', Post)

