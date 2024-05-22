// ********* Imports *******************************************/

require("dotenv").config(); // Load environment variables from .env file
const sessionSecret = process.env.SESSION_SECRET;
const express = require("express");
const session = require("express-session");
const path = require("path"); // gives access to the path module
const app = express(); // call express function to start new Express application
const { StatusCodes, getReasonPhrase } = require("http-status-codes");

// routes imports
const userRoutes = require("./routes/user.routes");
const productRoutes = require("./routes/product.routes");

// *********** CORS Authorization ********************************/

// Middleware that allows cross-origin requests
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

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

app.use(express.json()); // parse incoming requests with JSON payloads

// ********* Mongoose DB connexion ***********************************/

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://ladonanthony:4ApwmSyhBqVmxH6P@cluster0.vfu3h9q.mongodb.net/easyshopping?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Succesfully connected to MongoDB"))
  .catch(() => console.log("Connection to MongoDB failed !", error));

// ******** Routes *********************************************/

app.use("/users", userRoutes);
app.use("/products", productRoutes);

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

// ******* Port ************************************************/

// normalize port number
const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || 3000); // port number

//******* Listening to port 3000 ******************************/

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
