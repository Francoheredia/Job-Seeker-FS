const express = require('express');

function users(app) {
	const router = express.Router()
	app.use('/api/users', router)
	router.get('/users', (req, res))
}

module.exports = users 