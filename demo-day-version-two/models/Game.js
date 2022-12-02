const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  gameType: {
    type: Number,
    required: true,
  },
  users: {
    type: Array
  },
  // address: {
  //   type: String,
  //   required: true,
  // },
  // lat: {
  //   type: String,
  //   required: true,
  // },
  // lng: {
  //   type: String,
  //   required: true,
  // }
  location: {
    type: String,
    required: true,
  },
  dateAndTime: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }

 
});

module.exports = mongoose.model("Game", PostSchema);
