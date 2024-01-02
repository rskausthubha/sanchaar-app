const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000
require('./config/dbConnection')()
const rootRoute = require('./routes/rootRoutes')

app.use(express.json())

app.use('/', rootRoute)

app.listen(PORT, (err) => {
    if (err) {
        console.error(err)
    } else {
        console.info(`Server running at http://localhost:${PORT}`)
    }
})