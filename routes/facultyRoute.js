const express = require('express')
const router = express.Router()

const { verifyFacultyToken } = require('../middleware/jwtAuth')

router.route('/')
    .get(verifyFacultyToken)

module.exports = router