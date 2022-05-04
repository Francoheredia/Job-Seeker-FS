const Usermodel = require('../models/user')

class Users {
	async getAll() {
		try {
			const users = await Usermodel.find()
			return users
		} catch (error) {
			console.log(error);
		}
	}

	async create(data) {
		try {
			const user = await Usermodel.create(data)
			return user
		} catch (error) {
			console.log(error);
		}
	}

	async update(data){
		try {
			
		} catch (error) {
			console.log(error);
		}
	}

	async userdelete(){
		try {
			
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = Users