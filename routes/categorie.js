const express = require('express');
const categorieservices = require('../services/categorieservices')

function categorie(app) {

	const router = express.Router()
	const categorieservices = new categorieservices()

	app.use('/api/categorie', router)

}

module.exports = categorie 