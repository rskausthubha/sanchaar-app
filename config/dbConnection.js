const mongoose = require('mongoose')

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { dbName: "sanchaar_data" })
        console.log("Connected to SanchaarDB")
        // const myModel = mongoose.model('student', new mongoose.Schema({}))
        // console.log(myModel)
        // let res = await myModel.findOne({ 'rollNo': '245321748001' })
        // console.log(res)
    } catch(err) {
        console.error(err)
    }
}

module.exports = connectToDB