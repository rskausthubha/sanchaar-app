const mongoose = require('mongoose')


exports.handleLogin = async (req, res) => {
    console.log(req.body)

    const { username, pwd, role } = req.body

    console.log(`${username} ${pwd} ${role}`)
    
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

        console.log(keyForUsername)

        const UserModel = mongoose.model(role, new mongoose.Schema({}))

        console.log(UserModel)

        let queryObject = {}
        queryObject[keyForUsername] = username
        
        let user = await UserModel.findOne(queryObject)
        user = user.toJSON()
        
        console.log(user)

        if (!user || user.loginPwd !== pwd) {
            return res.status(401).json({ error: "Invalid credentials" })
        }

        res.send(user)
    } catch (err) {
        console.error(err)
    }
}