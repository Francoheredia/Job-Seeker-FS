const express = require('express');
const Usersservices = require('../services/usersservices')

function users(app) {

	const router = express.Router()
	const usersservices = new Usersservices()

	app.use('/api/users', router)

	router.get('/', async (req, res) => {
		const users = await usersservices.getAll() /* ARRAY USUARIOS */
		return res.json(users)
	})
	router.post('/', async (req, res) => {
		const user = await usersservices.create(req.body)
		return res.json(user)
	})
	router.put('/:id', async (req, res) => {
		const user = await usersservices.update(req.params.id, req.body)
		return res.json(user)
	})
	router.delete('/:id', async (req, res) => {
		const user = await usersservices.delete(req.params.id);
		return res.json(user)
	})
}

module.exports = users 