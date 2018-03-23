/* == PACKAGE IMPORTS == */
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


/* == APP INSTANCES and VARIABLES == */
var APP = express()
var APP_PORT = process.env.PORT || 5000

/* == MIDDLEWARE == */
// Enable JSON request data auto-parsing
APP.use(bodyParser.json())
// Serve static files from the React app
APP.use(express.static(path.join(__dirname, 'client/build')))

/* == APP CONFIGURATION == */
// Import routes
APP.use('/users', require('./resources/users/users.js'));

// Set application port
APP.listen(APP_PORT, () => {
  console.log('Application Running')
  console.log('PORT:', APP_PORT)
})
