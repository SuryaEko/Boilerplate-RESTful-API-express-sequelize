const path = require('path')
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

// Set up the express app
const app = express()

if (process.env.NODE_ENV !== 'production') {
    // Log requests to the console.
    app.use(logger('dev'))
}

// Register public folder
app.use('/public', express.static(path.join(__dirname, 'public')))

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Require our routes into the application.
app.use(require('./routes'))

app.get('*', (req, res) =>
    res.status(200).send({
        message: 'Welcome to the beginning of nothingness.'
    })
)

module.exports = app
