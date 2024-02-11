const jwt = require('jsonwebtoken')

const initToken = (req, res) => {
    const authHeader = req.header("Authorization")
    token = authHeader && authHeader.split(' ')[1]

    if (!token) return res.status(401).json({
        error: "Access denied",
        message: "Missing token"
    })

    return token
}

const verifyUser = (token, role, req, res, next) => {
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, tokenContent) => {
        if (err) return res.status(403).json({
            error: "Access denied",
            message: "Invalid token"
        })

        if (tokenContent.role !== role) return res.status(403).json({
            error: "Access denied",
            message: "Page is unauthorized for the particular user"
        })

        req.tokenContent = tokenContent

        next()
    })
}

const handleError = (err, res) => {
    console.error(`Error authorizing token >>> ${err}`)

    return res.status(500).json({
        error: "An error occurred",
        message: `${err}`
    })
}

exports.verifyStudentToken = (req, res, next) => {
    try {
        const token = initToken(req, res)
    
        verifyUser(token, "student", req, res, next)
    } catch (err) {
        handleError(err, res)
    }
}

exports.verifyParentToken = (req, res, next) => {
    try {
        const token = initToken(req, res)
    
        verifyUser(token, "parent",req, res, next)
    } catch (err) {
        handleError(err, res)
    }
}

exports.verifyFacultyToken = (req, res, next) => {
    try {
        const token = initToken(req, res)
    
        verifyUser(token, "facultyMember", req, res, next)
    } catch (err) {
        handleError(err, res)
    }
}

exports.verifyMgmtToken = (req, res, next) => {
    try {
        const token = initToken(req, res)
    
        verifyUser(token, "mgmtAdmin", req, res, next)
    } catch (err) {
        handleError(err, res)
    }
}