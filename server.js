const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

const PORT = process.env.PORT || 3000
require('./config/dbConnection')()
const rootRoute = require('./routes/rootRoutes')

app.use(cors({ origin: "*" }))

app.use(express.static(path.join(__dirname, "views", "dist")))

app.use(express.json())

app.use('/', rootRoute)

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.info(`Server running at http://localhost:${PORT}`)
    }
})