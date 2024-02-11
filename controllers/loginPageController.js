const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')


exports.handleLogin = async (req, res) => {
    const { username, pwd, role } = req.body
    
    try {
        let keyForUsername
        switch (role) {
            case "student":
                keyForUsername = "rollNo"
                break
            case "parent":
                keyForUsername = "parMobile"
                break
            case "facultyMember":
            case "mgmtAdmin":
                keyForUsername = "username"
            default:
                res.status(401).json({
                    error: "Authentication failed",
                    message: "Role required"
                })
        }

        const UserModel = mongoose.model(role, new mongoose.Schema({}))
        
        let user = await UserModel.findOne({ [keyForUsername]: username })
        user = user.toJSON()

        if (!user || user.loginPwd !== pwd) {
            res.status(401).json({
                error: "Authentication failed",
                message: "Invalid credentials"
            })
        }

        const toBeTokenized = { user, role }
        const token = jwt.sign(toBeTokenized, process.env.ACCESS_TOKEN_SECRET_KEY, { expiresIn: '1h' })

        res.send(token)
    } catch (err) {
        console.error(`Error handling login >>> ${err}`)

        return res.status(500).json({
            error: "An error occurred",
            message: `${err}`
        })
    }
}