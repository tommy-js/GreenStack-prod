const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  userId: String,
  username: String,
  profileImage: String,
  likeId: String,
  timestamp: Number,
  text: String,
  reference: {
    postId: String,
    text: String,
  },
});

module.exports = mongoose.model("Like", likeSchema);
