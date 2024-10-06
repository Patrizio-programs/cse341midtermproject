const express = require('express')
const app = express()
const bodyParser = require('body-parser')


app.use(bodyParser.json())



app.use('/', require('./routes/index.js'))

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
