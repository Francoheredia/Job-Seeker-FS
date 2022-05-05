const express = require('express');
const Authservices = require('../services/authservices')

function Auth(app) {
	const router = express.Router()
	const authservices = new Authservices()

	app.use('/api/auth', router)

	router.post('/login', (req, res) => {
		const token = authservices.login(req.body)
		return res.json(token)
	})
}

module.exports = Auth