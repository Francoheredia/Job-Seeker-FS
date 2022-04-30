const { Schema, model } = require('mongoose');

const CategorieSchema = Schema({
  name: {
    type: String,
    required: [true, 'categorie is  required'],
    enum: ['Front end', 'Back end', 'Javascript', 'Python'],
  },
});

module.exports = model('Categories', CategorieSchema);
