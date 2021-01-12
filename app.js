const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const config = require('./config/keys')
const postsRoutes = require('./routes/posts')

const app = express()

// database
mongoose.connect(config.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('Database connected'))

// middleware
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

// routes middleware
app.use('/api/posts', postsRoutes)

// send Error
app.use('/', (err, req, res, next) => {
    if (err) {
        console.log(err)
        res.send(err)
    }
    //  next(err)
})

const port = config.PORT || 4000
app.listen(port, () => {
    console.log(`Server has been started on port: ${port}`)
})