const bcrypt = require('bcrypt')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const DB = require('./../../db/index')
const Sequelize = DB.Sequelize
const sequelize = DB.sequelize
const Admins = DB.Admins

module.exports = (passport) => {
  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user)
  })
  
  // used to deserialize the user
  passport.deserializeUser(async (user, done) => {
    try {
      let admin = await Admins.findOne({ where: { username: user.username } })
      if (admin)
        done(null, admin)
      else
        throw new Error('ERROR: Admin does not exist')
    } catch (err) {
      done(err)
    }
  })

  passport.use('local-strategy', new LocalStrategy(async (username, password, done) => {
    try {
      // check if username exists
      let admin = await Admins.findOne({ where: { username } })
      if (!admin)
        return done(null, false, { message: 'Incorrect credentials' })
      
      // Validate password with encrypted password
      if (await Admins.validatePassword(password, admin.password))
        return done(null, admin)
      else
        return done(null, false, { message: 'Incorrect credentials'})
    } catch (err) {
      return done(err)
    }
  }))
}