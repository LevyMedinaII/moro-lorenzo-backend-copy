
/* == DEVELOPMENT HELPERS == */
// Environment File
require('dotenv').config()

/* == PACKAGE IMPORTS == */
const cors = require('cors')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const passport = require('./resources/auth/auth').passport
const models = require('./db/config')

/* == APP INSTANCES and VARIABLES == */
var APP = express()
var APP_PORT = process.env.PORT || 5000

/* == MIDDLEWARE == */
// Enable JSON request data auto-parsing
APP.use(bodyParser.json())
// Enable x-www-form-urlencoded
APP.use(bodyParser.urlencoded({ extended: true }))
// Enable passport sessions
APP.use(session({
	secret: process.env.SESSION_SECRET,
	resave: true,
	saveUninitialized: true
}))
APP.use(passport.initialize())
APP.use(passport.session())

/* == APP CONFIGURATION == */
// Import routes
APP.use('/admins', require('./resources/admins/admins'))
APP.use('/persons', require('./resources/persons/persons'))
APP.use('/logs', require('./resources/logs/logs'))
APP.use('/members', require('./resources/members/members'))
APP.use('/membership-packages', require('./resources/membership-packages/membership-packages'))
APP.use('/messages', require('./resources/messages/messages'))
APP.use('/sales-transactions', require('./resources/sales-transactions/sales-transactions'))
APP.use('/visits', require('./resources/visits/visits'))
APP.use('/walk-in-clients', require('./resources/walk-in-clients/walk-in-clients'))

// Enable cross origin resource sharing
APP.use(cors())

// Set Application port and run
APP.listen(APP_PORT, () => {
  console.log('Application Running')
  console.log('PORT:', APP_PORT)
})
