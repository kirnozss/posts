const mongoose = require('mongoose')
const { Schema } = mongoose

const Post = new Schema({
    user_id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date
    },
    country_id: {
        type: String,
        required: true
    },
    language_id: {
        type: String,
        required: true
    }

}, {
    timestamps: true
})

module.exports = mongoose.model('Post', Post)

