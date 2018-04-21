let passport = require('passport')
const DB = require('./../../db/index.js')
const Admins = DB.Admins

require('./config.js')(passport)

module.exports = {
  passport,
  ensureAdmin: async (req, res, next) => {
    try {
      if (!req.user)
        throw new Error('ERROR 401: Unauthorized')
      let admin = await Admins.findOne({
        where: {
          username: req.user.username,
        }
      })
      if(!admin)
        throw new Error('ERROR 500: Invalid Credentials')
      next()
    } catch (err) {
      res.send(err.message)
    }
  },
}