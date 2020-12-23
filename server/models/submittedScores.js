const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const submittedScores = new Schema({
  userId: String,
  score: Number,
});

module.exports = mongoose.model("SubmittedScores", submittedScores);
