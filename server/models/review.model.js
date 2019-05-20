const mongoose = require('mongoose');
const { Schema } = mongoose;

const ReviewSchema = new Schema({
  reviewName: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [2, 'More than 2 characters needed']
  },

  rating: {
    type: Number,
    required: [true, 'Rating canno be empty!.'],
    min: 1,
    max: 5,
  },
  content: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [5, 'More than 5 characters needed!']
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
  }
},
  { timestamps: true }
);


module.exports = mongoose.model('Review', ReviewSchema)
