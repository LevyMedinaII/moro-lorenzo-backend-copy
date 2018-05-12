let router = require('express').Router()
let service = require('./service')
let auth = require('./../auth/auth')

// GET /visits
router.get('/', async (req, res) => {
  res.send(await service.get())
})

// GET /visits/:id
router.get('/:id',  async (req, res) => {
  res.send(await service.getOne(req.params.id))
})

// POST /visits
// Required Data:
// - STRING date (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
// - STRING time_in (TIME) FORMAT: HH:mm:ss
// - STRING time_out (TIME) FORMAT: HH:mm:ss
// - STRING/INTEGER person_id
router.post('/', async (req, res) => {
  res.send(await service.add(
    req.body.date,
    req.body.time_in,
    req.body.time_out,
    req.body.person_id
  ))
})

// PUT /visits/:id
// Required Data:
// - STRING date (DATE) FORMAT: YYYY-MM-DD
// ---- e.g. 1996-12-27
// - STRING time_in (TIME) FORMAT: HH:mm:ss
// - STRING time_out (TIME) FORMAT: HH:mm:ss
// - STRING/INTEGER person_id
router.put('/:id', async (req, res) => {
  res.send(await service.update(
    req.params.id,
    req.body.date,
    req.body.time_in,
    req.body.time_out,
    req.body.person_id
  ))
})


// DELETE /visits/:id
router.delete('/:id', async(req, res) => {
  res.send(await service.deleteOne(req.params.id))
})

// DELETE /visits
// Required Data:
// - [STRING] id_range
router.delete('/', async(req, res) => {
  res.send(await service.delete(req.body.id_range))
})

module.exports = router