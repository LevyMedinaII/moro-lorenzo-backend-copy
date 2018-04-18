let router = require('express').Router()
let service = require('./service')
let auth = require('./../auth/auth')

// GET /sales-transactions
router.get('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.get())
})

// GET /sales-transactions/:id
router.get('/:id', auth.ensureAdmin,  async (req, res) => {
  res.send(await service.getOne(req.params.id))
})

// POST /sales-transactions
// Required Data:
// - STRING content
// - STRING date (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
// - STRING/INTEGER person_id
router.post('/', auth.ensureAdmin, async (req, res) => {
  res.send(await service.add(req.body.amount, req.body.date, req.body.person_id))
})

// PUT /sales-transactions
// Required Data:
// - STRING content
// - STRING date (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
// - STRING/INTEGER person_id
router.put('/:id', auth.ensureAdmin, async (req, res) => {
  res.send(await service.update(req.params.id, req.body.amount, req.body.date, req.body.person_id))
})


// DELETE /sales-transactions/:id
router.delete('/:id', auth.ensureAdmin, async(req, res) => {
  res.send(await service.deleteOne(req.params.id))
})

// DELETE /sales-transactions
// Required Data:
// - [STRING] id_range
router.delete('/', auth.ensureAdmin, async(req, res) => {
  res.send(await service.delete(req.body.id_range))
})

module.exports = router