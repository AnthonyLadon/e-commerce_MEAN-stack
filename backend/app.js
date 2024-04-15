const express = require("express");
const session = require("express-session");
const path = require("path"); // module qui fournit des utilitaires pour travailler avec les chemins de fichiers et de répertoires
const app = express(); // appelle la fonction express pour créer une application Express
const port = 3000;
const User = require("./models/User");
const Product = require("./models/Product");

// ********************************************************/

const mongoose = require("mongoose"); // module qui permet de se connecter à une base de données MongoDB
mongoose
  .connect("mongodb://localhost:27017/easyshopping", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

/* Middleware qui initialise une session */
app.use(
  session(
    { secret: "kzhVhfUJQTglG5fUFPzW8I1jaa8NNHop" }, // Clé secrète pour signer le cookie de session
    (resave = false), // Ne sauvegarde pas la session à chaque requête
    (saveUninitialized = false) // Ne sauvegarde pas les sessions vides
  )
); //! ********************* Attention clé exposée ! **************

app.use(express.json());
/* Parse le corps de la requête en objet JavaScript utilisable
(bodyParser) */

// ********************************************************/

async function main() {
  const users = await User.find();
  console.log("voici les utilisateurs: " + users);
}

main();

// async function createUser() {
//   const user1 = new User({
//     email: "jlkj@hjh.com",
//     password: "123456",
//     age: 25,
//     firstname: "John",
//     lastname: "Doe",
//   });

//   // Enregistre l'utilisateur dans la base de données
//   await user1.save().then(() => console.log("Utilisateur créé !"));
// }
// createUser();

// async function createProdcut() {
//   const product1 = new Product({
//     name: "Chaussure",
//     price: 50,
//     description: "Chaussure de sport",
//     category: "Sport",
//     imageUrl: "images/chaussure.jpg",
//   });

//   // Enregistre l'utilisateur dans la base de données
//   await product1.save().then(() => console.log("Produit créé !"));
// }
// createProdcut();

app.get("/", (req, res) => {
  req.session.views = req.session.views ? req.session.views + 1 : 1;
  res.send(`<h1>Main. vu ${req.session.views} fois </h1>`);
});

app.get("/products/:id", (req, res) => {
  console.log("parametres: " + req.params.id);
  console.log("queries: " + req.query);
  res.send(`Article #${req.params.id} retourné`);
});

// ********************************************************/

app.use(
  "/images",
  express.static(path.join(__dirname, "images"))
); /* Middleware qui pointe vers le dossier images et joint: __dirname + nom du dossier "images" */

// 404 si aucune page trouvée
// Si aucune route n'a renvoyé de réponse, celle-ci en renvoie une
app.use((req, res) => {
  res.status(404).send("Erreur 404 - page non trouvée");
});

//******* Listening to port 3000 *************************/

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
