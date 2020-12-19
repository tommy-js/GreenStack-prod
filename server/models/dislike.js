const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dislikeSchema = new Schema({
  userId: String,
  username: String,
  profileImage: String,
  dislikeId: String,
  timestamp: Number,
  text: String,
  reference: {
    postId: String,
    text: String,
  },
});

module.exports = mongoose.model("Dislike", dislikeSchema);
