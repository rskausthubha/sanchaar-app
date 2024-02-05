const mongoose = require('mongoose')


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
                return res.status(401).json({ error: "Please select a role" })
        }

        const UserModel = mongoose.model(role, new mongoose.Schema({}))
        
        let user = await UserModel.findOne({ [keyForUsername]: username })
        user = user.toJSON()

        if (!user || user.loginPwd !== pwd) {
            return res.status(401).json({ error: "Invalid credentials" })
        }

        res.send({ user, role })
    } catch (err) {
        console.error(`Error handling login >>> ${err}`)
    }
}