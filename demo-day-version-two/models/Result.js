const mongoose = require("mongoose")

const ResultSchema = new mongoose.Schema({
    game: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Game",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    userName: {
      type: mongoose.Schema.Types.String,
      ref: "userName",
    },
    points: {
      type: Number,
      required: true,
    },
    assists: {
      type: Number,
      required: true,
    },
    rebounds: {
      type: Number,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  });

  module.exports = mongoose.model("Result", ResultSchema);

