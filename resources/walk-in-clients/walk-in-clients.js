let router = require('express').Router()
let service = require('./service')
let auth = require('./../auth/auth')

// GET /walk-in-clients
router.get('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.get())
})

// GET /walk-in-clients/:id
router.get('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.getOne(req.params.id))
})

// POST /walk-in-clients
// Required Data:
// - STRING service_availed
// - STRING amount_paid
// - STRING/INTEGER person_id
router.post('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.add(req.body.service_availed, req.body.amount_paid, req.body.person_id))
})

// PUT /walk-in-clients/:id
// Required Data:
// - STRING service_availed
// - STRING amount_paid
// - STRING/INTEGER person_id
router.put('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.update(
    req.params.id,
    req.body.service_availed,
    req.body.amount_paid,
    req.body.person_id
  ))
})


// DELETE /walk-in-clients/:id
router.delete('/:id', auth.ensureAdmin, async(req, res) => {
  res.send(await service.deleteOne(req.params.id))
})

// DELETE /walk-in-clients
// Required Data:
// - [STRING] id_range
router.delete('/', auth.ensureAdmin, async(req, res) => {
  res.send(await service.delete(req.body.id_range))
})

module.exports = router