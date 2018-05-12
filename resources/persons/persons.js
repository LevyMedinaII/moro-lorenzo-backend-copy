let router = require('express').Router()
let service = require('./service')
let auth = require('./../auth/auth')

// GET /persons
router.get('/', async (req, res) => {
  res.send(await service.get())
})

// GET /persons/:id
router.get('/:id', async (req, res) => {
  res.send(await service.getOne(req.params.id))
})

// POST /persons
// Required Data:
// - STRING last_name
// - STRING first_name
// - STRING type
router.post('/', async (req, res) => {
  res.send(await service.add(req.body.last_name, req.body.first_name, req.body.type))
})

// PUT /persons/:id
// Required Data:
// - STRING last_name
// - STRING first_name
// - STRING type
router.put('/:id', async (req, res) => {
  res.send(await service.update(req.params.id, req.body.last_name, req.body.first_name, req.body.type))
})

// DELETE /persons/:id
router.delete('/:id', async(req, res) => {
  res.send(await service.deleteOne(req.params.id))
})

// DELETE /persons
// Required Data:
// - [STRING] id_range
router.delete('/', async(req, res) => {
  res.send(await service.delete(req.body.id_range))
})

module.exports = router