const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const watchlistSchema = new Schema({
  stockId: String,
  timestamp: Number,
});

module.exports = mongoose.model("Watchlist", watchlistSchema);
