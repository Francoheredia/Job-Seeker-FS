const { Schema, model } = require('mongoose');

const JobSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'categorie is  required'],
    },
    categories: {
      type: String,
      enum: ['Front end', 'Back end', 'Javascript', 'Python'],
      required: [true, 'categorie is  required'],
    },

    country: {
      type: String,
      required: [true, 'country is  required'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Jobs', JobSchema);
