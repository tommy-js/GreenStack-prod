const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorialScore = new Schema({
  id: String,
  scored: Boolean,
});

module.exports = mongoose.model("TutorialScore", tutorialScore);
