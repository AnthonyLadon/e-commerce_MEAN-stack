const mongoose = require("mongoose");
const { Schema } = mongoose; // destructuring pour extraire le module schema de mongoose

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  age: { type: Number, min: 0, required: false },
  status: { type: String, default: "user" },
});

module.exports = mongoose.model("User", userSchema); // enregistre le modèle User dans la base de données
// et exporte le modèle User pour pouvoir l'utiliser dans d'autres fichiers
