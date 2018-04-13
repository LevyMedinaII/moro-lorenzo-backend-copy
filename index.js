
/* == DEVELOPMENT HELPERS == */
// Environment File
require('dotenv').config()

/* == PACKAGE IMPORTS == */
const express = require('express')
const bodyParser = require('body-parser')
const models = require('./db/config')

/* == APP INSTANCES and VARIABLES == */
var APP = express()
var APP_PORT = process.env.PORT || 5000

/* == MIDDLEWARE == */
// Enable JSON request data auto-parsing
APP.use(bodyParser.json())
// Enable x-www-form-urlencoded
APP.use(bodyParser.urlencoded({ extended: true }))

/* == APP CONFIGURATION == */
// Import routes
APP.use('/persons', require('./resources/persons/persons'))
APP.use('/messages', require('./resources/messages/messages'))

// Set application port
APP.listen(APP_PORT, () => {
  console.log('Application Running')
  console.log('PORT:', APP_PORT)
})
