const express = require('express')
const router = express.Router()

const { verifyStudentToken } = require('../middleware/jwtAuth')

router.route('/')
    .get(verifyStudentToken)

module.exports = router