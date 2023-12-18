const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "..", "views", "dist", "index.html")) --> not working
    res.send("Welcome")
})

module.exports = router