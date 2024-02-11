const express = require('express')
const router = express.Router()

const { verifyParentToken } = require('../middleware/jwtAuth')

router.route('/')
    .get(verifyParentToken)

module.exports = router