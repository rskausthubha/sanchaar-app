const mongoose = require('mongoose')

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { dbName: "sanchaar_data" })
        console.log("Connected to SanchaarDB")
    } catch(err) {
        console.error(err)
    }
}

module.exports = connectToDB