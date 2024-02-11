const express = require('express')
const router = express.Router()

const { handleLogin } = require('../controllers/loginPageController')

router.post('/', handleLogin)

module.exports = router