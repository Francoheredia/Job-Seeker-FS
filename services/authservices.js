const jwt = require('jsonwebtoken')
const { jwtsecret } = require('../config')


class Auth{
	login(data){
		console.log(jwtsecret);
		const token = jwt.sign(data,jwtsecret,{
			expiresIn:'7d'
		})
		return token
	}
}
module.exports = Auth 