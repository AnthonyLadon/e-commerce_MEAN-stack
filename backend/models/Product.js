const mongoose = require("mongoose");
const { Schema } = mongoose; // destructuring pour extraire le module schema de mongoose

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  isAvailable: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  inPromotion: { type: Boolean, default: false },
});

module.exports = mongoose.model("Product", productSchema); // enregistre le modèle Product dans la DB
