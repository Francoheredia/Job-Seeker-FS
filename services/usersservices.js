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

	async update(id, data) {
		try {
			const userupdate = await Usermodel.findByIdAndUpdate(id, data, { new: true })
			return userupdate
		} catch (error) {
			console.log(error);
		}
	}

	async delete(id) {
		try {
			const userdelete = await Usermodel.findByIdAndDelete(id)
			return userdelete
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = Users