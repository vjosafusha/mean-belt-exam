const mongoose = require('mongoose');
const { Schema } = mongoose;


const MovieSchema = new Schema({
  movieName: {
    type: String,
    required: [true, 'Nmae is required'],
    minglength: [2, 'More than 2 characters needed!'],
  }
}, { timestamps: true });


module.exports = mongoose.model('Movie', MovieSchema)
