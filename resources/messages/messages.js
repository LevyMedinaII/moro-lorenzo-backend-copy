let router = require('express').Router()
let service = require('./service')
let auth = require('./../auth/auth')

// GET /messages
router.get('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.get())
})

// GET /messages/:id
router.get('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.getOne(req.params.id))
})

// POST /messages
// Required Data:
// - STRING content
router.post('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.add(req.body.content, req.body.date, req.body.time))
})

// PUT /messages
// Required Data:
// - STRING last_name
// - STRING first_name
// - STRING type
router.put('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.update(req.params.id, req.body.last_name, req.body.first_name, req.body.type))
})

module.exports = router