const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const watchlistSchema = new Schema({
  stockId: String,
  title: String,
  ticker: String,
  timestamp: Number,
  sector: String,
});

module.exports = mongoose.model("Watchlist", watchlistSchema);
