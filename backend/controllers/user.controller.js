const User = require("../models/User");

const create = async (req, res) => {
  const user = await User.create(req.body);
  res.send(user);
};

const getAll = async (req, res) => {
  const users = await User.find();
  res.send(users);
};

const getOne = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.send(user);
};

// * Export controllers *********************/
module.exports = {
  create,
  getAll,
  getOne,
};
