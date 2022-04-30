const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
  image: {
    type: String,
  },
  rol: {
    type: String,
    required: [true, 'rol is required'],
    enum: ['Admin', 'Empleador', 'Postulante'],
  },
  state: {
    type: Boolean,
    default: true,
  },

  country: {
    type: String,
    required: [true, 'country is required'],
  },
});

module.exports = model('Users', UserSchema);
