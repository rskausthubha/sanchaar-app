const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization")

    if (!token) return res.status(401).json({ error: "Access denied" })

    try {
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_)
    }
}