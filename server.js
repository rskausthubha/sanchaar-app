const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 3000
require('./config/dbConnection')()
const allowedOrigins = require('./config/allowedOrigins')
const rootRoute = require('./routes/rootRoute')
const studentRoute = require('./routes/studentRoute')
const parentRoute = require('./routes/parentRoute')
const facultyRoute = require('./routes/facultyRoute')
const mgmtRoute = require('./routes/mgmtRoute')

app.use(cors({ origin: allowedOrigins }))

app.use(express.static(path.join(__dirname, "public")))

app.use(express.json())

app.use('/', rootRoute)
app.use('/student', studentRoute)
app.use('/parent', parentRoute)
app.use('/faculty', facultyRoute)
app.use('/mgmt', mgmtRoute)

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.info(`Server running at http://localhost:${PORT}`)
    }
})