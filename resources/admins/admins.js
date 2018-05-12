let router = require('express').Router()
let service = require('./service')
let auth = require('./../auth/auth')
let passport = auth.passport

// GET /admins
router.get('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.get())
})

// GET /admins/:id
router.get('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.getOne(req.params.id))
})

// POST /admins
// Description: Registers an admin given the fields if the provided ADMIN_REGISTER_TOKEN
//    matches the one in the environment file
// Required Data:
// - STRING username
// - STRING password
// - STRING ADMIN_REGISTER_TOKEN
router.post('/', async (req, res, next) => {
  if (req.body.ADMIN_REGISTER_TOKEN === process.env.ADMIN_REGISTER_TOKEN)
    res.send(await service.add(req.body.username, req.body.password))
  else
    res.send('INVALID TOKEN')
})

// POST /admins/login
// Required Data:
// - STRING username
// - STRING password
router.post('/login', passport.authenticate('local-strategy'), (req, res) => {
  res.send(req.user)
})

// GET /login/current
// DESC: returns the current logged in user
router.get('/login/current', auth.ensureAdmin, async (req, res) => {
  res.send(req.user)
})

// POST /logout
// DESC: destroys current login session
router.post('/logout', auth.ensureAdmin, async (req, res) => {
  res.send(await service.logout())
})

// PUT /admins
// Required Data:
// - STRING content
// - STRING person_id
// Optional Data:
// - STRING date (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
router.put('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.add(req.params.id, req.body.date, req.body.content, req.body.person_id))
})


// DELETE /admins/:id
router.delete('/:id', auth.ensureAdmin, async(req, res) => {
  res.send(await service.deleteOne(req.params.id))
})

// DELETE /admins
// Required Data:
// - [STRING] id_range
router.delete('/', auth.ensureAdmin, async(req, res) => {
  res.send(await service.delete(req.body.id_range))
})

module.exports = router