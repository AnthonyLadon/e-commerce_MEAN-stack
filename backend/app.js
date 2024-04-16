// ********* Imports *******************************************/

// Load environment variables from .env file
require("dotenv").config();
const sessionSecret = process.env.SESSION_SECRET;
const port = process.env.PORT || 3000; // port number

const express = require("express");
const session = require("express-session");
const path = require("path"); // gives access to the path module
const app = express(); // call express function to start new Express application

// models imports
const User = require("./models/User");
const Product = require("./models/Product");

// routes imports
const userRoutes = require("./routes/user.routes");

// *********** Session ***************************************/

// Middleware that creates a session object in the request object
app.use(
  session({
    secret: sessionSecret, // Secret used to sign the session ID cookie
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't save empty sessions
    cookie: { secure: true }, // cookie settings: secure: true for https
  })
);

app.use(express.json()); // parse incoming requests with JSON payloads

// ********* Mongoose DB connexion ***********************************/

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/easyshopping", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Succesfully connected to MongoDB"))
  .catch(() => console.log("Connection to MongoDB failed !"));

// ******** Routes *********************************************/

app.use("/users", userRoutes);

// ****** Error handling ****************************************/
app.use((req, res) => {
  res.status(404).send("Error 404 - page not found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Server internal error");
});

//******* Listening to port 3000 ******************************/

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
