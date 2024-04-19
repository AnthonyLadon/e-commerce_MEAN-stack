const mongoose = require("mongoose");
const User = require("../models/User");
const catchAsync = require("../helpers/catchAsync"); // error handling function
const { StatusCodes, getReasonPhrase } = require("http-status-codes");
const bcrypt = require("bcrypt");

// ***** SIGNUP *********************/

const signup = catchAsync((req, res) => {
  const data = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  // Regex -> At least one uppercase letter, one digit and one special character
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,20}$/;

  if (!emailRegex.test(data.email)) {
    res.status(StatusCodes.BAD_REQUEST).send("Invalid email format");
    return;
  }
  if (data.firstName.length < 2) {
    res.status(StatusCodes.BAD_REQUEST).send("First name is too short");
    return;
  }
  if (data.lastName.length < 2) {
    res.status(StatusCodes.BAD_REQUEST).send("Last name is too short");
    return;
  }
  if (typeof data.age !== "number" || data.age < 0) {
    res.status(StatusCodes.BAD_REQUEST).send("Invalid age value");
    return;
  }
  if (
    typeof data.password !== "string" ||
    data.password.length < 8 ||
    data.password.length > 20 ||
    !passwordRegex.test(data.password)
  ) {
    res.status(StatusCodes.BAD_REQUEST).send("Password is not valid");
    return;
  }

  bcrypt
    .hash(data.password, 10) // paswword hash + 10 salt rounds
    .then((hash) => {
      const user = new User.create({
        firstName: data.firstName,
        lastName: data.lastName,
        age: data.age,
        password: hash,
      });
      user
        .save() // Push the user to the database
        .then(() =>
          res.status(StatusCodes.CREATED).json({ message: "User created !" })
        )
        .catch((error) => res.status(StatusCodes.BAD_REQUEST).json({ error }));
    })
    .catch((error) =>
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    );
});

// ***** GET *********************/

const getAll = catchAsync(async (req, res) => {
  const users = await User.find();
  res.send(users);
});

const getOne = catchAsync(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .send({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
  }
});

// ***** PATCH *********************/

// finds an user by ID and updates it
const updateById = catchAsync(async (req, res) => {
  const { id } = req.params; // destructuring id from req.params
  try {
    new mongoose.Types.ObjectId(id); // check if the id is a valid ObjectId
  } catch (error) {
    console.log(error.message);
    res
      .status(StatusCodes.BAD_REQUEST)
      .send({ error: getReasonPhrase(StatusCodes.BAD_REQUEST) });
    return;
  }

  const data = req.body;
  const emailRegex = /\S+@\S+\.\S+/;
  if (data.email && !emailRegex.test(data.email)) {
    res.status(StatusCodes.BAD_REQUEST).send("Invalid email format");
    return;
  }
  if (data.firstName && data.firstName.length < 2) {
    res.status(StatusCodes.BAD_REQUEST).send("First name is too short");
    return;
  }
  if (data.lastName && data.lastName.length < 2) {
    res.status(StatusCodes.BAD_REQUEST).send("Last name is too short");
    return;
  }
  if (data.age && (typeof data.age !== "number" || data.age < 0)) {
    res.status(StatusCodes.BAD_REQUEST).send("Invalid age value");
    return;
  }

  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true, // returns the modified document rather than the original
  });
  if (user) {
    res.send(user);
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .send({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
  }
});

// ***** DELETE *********************/

const deleteById = catchAsync(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .send({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
  }
});

// ****** Controllers Export ******************/

module.exports = {
  signup,
  getAll,
  getOne,
  updateById,
  deleteById,
};
