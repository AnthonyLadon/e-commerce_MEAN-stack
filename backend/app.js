// ********* Imports *******************************************/

// Load environment variables from .env file
require("dotenv").config();
const sessionSecret = process.env.SESSION_SECRET;
const port = process.env.PORT || 3000; // port number
const express = require("express");
const session = require("express-session");
const path = require("path"); // gives access to the path module
const app = express(); // call express function to start new Express application
const { StatusCodes, getReasonPhrase } = require("http-status-codes");

// routes imports
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");

// *********** Session ***************************************/

// Middleware that creates a session object in the request object
app.use(
  session({
    secret: sessionSecret, // Secret used to sign the session ID cookie
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't save empty sessions
    // cookie: { secure: true }, //! cookie settings: secure: true for https -> disabled in dev environment
  })
);

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
app.use("/products", productRoutes);
app.use(express.json()); // parse incoming requests with JSON payloads

// ****** Error handling ****************************************/
app.use((req, res) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .send({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
});

// error handling for async functions in controllers ("err" comes first to catch errors coming from the catchAsync function)
app.use((err, req, res, next) => {
  console.log(err);
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send({ error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR) });
});

//******* Listening to port 3000 ******************************/

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
