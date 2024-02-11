const express = require('express')
const router = express.Router()

const { verifyMgmtToken } = require('../middleware/jwtAuth')

router.route('/')
    .get(verifyMgmtToken)

module.exports = router