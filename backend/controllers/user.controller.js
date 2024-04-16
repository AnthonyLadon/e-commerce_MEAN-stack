const User = require("../models/User");
const catchAsync = require("../helpers/catchAsync"); // import the catchAsync -> error handling function

// ***** CREATE *********************/

const create = catchAsync(async (req, res) => {
  const data = req.body;

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(data.email)) {
    res.status(400).send("Invalid email format");
    return;
  }
  if (data.firstName.length < 2) {
    res.status(400).send("First name is too short");
    return;
  }
  if (data.lastName.length < 2) {
    res.status(400).send("Last name is too short");
    return;
  }
  if (typeof data.age !== "number" || data.age < 0) {
    res.status(400).send("Invalid age value");
    return;
  }

  const user = await User.create(req.body);
  res.send(user);
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
    res.status(404).send("User not found");
  }
});

// ***** PATCH *********************/

// finds an user by ID and updates it
const updateById = catchAsync(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // returns the modified document rather than the original
  });
  if (user) {
    res.send(user);
  } else {
    res.status(404).send("User not found");
  }
});

// ***** DELETE *********************/

const deleteById = catchAsync(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send("User not found");
  }
});

// ****** Controllers Export ******************/

module.exports = {
  create,
  getAll,
  getOne,
  updateById,
  deleteById,
};
