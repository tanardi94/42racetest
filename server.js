const express = require("express")
const bodyParser = require('body-parser')

const app = express()
const port = process.env.DEV_PORT || 5000

const apiRoutes = require('./api-routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))


app.use('/api', apiRoutes)

app.listen(port, () => {
    console.log("Listening to port ", port)
})