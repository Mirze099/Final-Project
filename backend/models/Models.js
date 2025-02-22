import mongoose from "mongoose";

let ProductSchema = new mongoose.Schema({
  image: String,
  symbol: String,
  name: String,
  current_price: Number,
  market_cap: Number,
  total_volume: Number,
  market_cap_change_percentage_24h: Number,
  price_change_percentage_1h_in_currency: Number,
  price_change_percentage_24h_in_currency: Number,
  price_change_percentage_7d_in_currency: Number,
});

export let ProductModel = mongoose.model("product", ProductSchema);
