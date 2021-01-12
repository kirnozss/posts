const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.json('Hello')
})


const port = 4000
app.listen(port, () => {
    console.log(`Server has been started on port: ${port}`)
})