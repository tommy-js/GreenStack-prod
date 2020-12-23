const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorialScore = new Schema({
  tutorialNum: Number,
  scored: Boolean,
});

module.exports = mongoose.model("TutorialScore", tutorialScore);
