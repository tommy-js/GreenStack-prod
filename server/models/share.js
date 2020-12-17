const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shareSchema = new Schema({
  stockId: String,
  title: String,
  shares: Number,
  sector: String,
  ticker: String,
  color: String,
});

module.exports = mongoose.model("Share", shareSchema);
