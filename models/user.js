const { Schema, model } = require('mongoose');

const UserSchema = Schema(
  {
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
    /*  image: {
     type: String,
   },*/
    role: {
      type: String,
      required: [true, 'rol is required'],
      enum: ['Applicant', 'Employer', 'Admin'],
    },
    /*state: {
    type: Boolean,
    default: true,
  }, */
    country: {
      type: String,
      required: [true, 'country is required'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Users', UserSchema);
