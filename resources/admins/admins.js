let router = require('express').Router()
let service = require('./service')
let auth = require('./../auth/auth')
let passport = auth.passport

// GET /logs
router.get('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.get())
})

// GET /logs/:id
router.get('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.getOne(req.params.id))
})

// POST /logs
// Required Data:
// - STRING content
// - STRING personId
// Optional Data:
// - STRING date (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
router.post('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.add(req.body.username, req.body.password))
})

router.post('/login', passport.authenticate('local-strategy'), (req, res) => {
  res.send(req.user)
})

router.post('/logout', auth.ensureAdmin, async (req, res) => {
  await req.logout()
  res.redirect('/')
})

// PUT /logs
// Required Data:
// - STRING content
// - STRING person_id
// Optional Data:
// - STRING date (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
router.put('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.add(req.params.id, req.body.date, req.body.content, req.body.person_id))
})


// DELETE /logs/:id
router.delete('/:id', auth.ensureAdmin, async(req, res) => {
  res.send(await service.deleteOne(req.params.id))
})

// DELETE /logs
// Required Data:
// - [STRING] id_range
router.delete('/', auth.ensureAdmin, async(req, res) => {
  res.send(await service.delete(req.body.id_range))
})

module.exports = router