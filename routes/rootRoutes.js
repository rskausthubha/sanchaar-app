const express = require('express')
const router = express.Router()
const path = require('path')

const { handleLogin } = require('../controllers/loginPageController')

router.route('/')
    .get((req, res) => {
        res.sendFile(path.join(__dirname, "..", "views", "dist", "index.html"))
    })
    .post(handleLogin)

module.exports = router