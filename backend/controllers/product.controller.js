const mongoose = require("mongoose");
const Product = require("../models/Product");
const catchAsync = require("../helpers/catchAsync"); // error handling function
const { StatusCodes } = require("http-status-codes");

// ***** CREATE *********************/

const create = catchAsync(async (req, res) => {
  const data = req.body;

  if (data.name.length < 2) {
    res.status(StatusCodes.BAD_REQUEST).send("Name is too short");
    return;
  }
  if (typeof data.price !== "number" || data.price < 0) {
    res.status(StatusCodes.BAD_REQUEST).send("Invalid price value");
    return;
  }
  if (data.description.length < 2) {
    res.status(StatusCodes.BAD_REQUEST).send("Description is too short");
    return;
  }
  if (data.category.length < 2) {
    res.status(StatusCodes.BAD_REQUEST).send("Category is too short");
    return;
  }

  const product = await Product.create({
    name: data.name,
    price: data.price,
    description: data.description,
    category: data.category,
  });
  res.send(product);
});

// ***** GET *********************/

const getAll = catchAsync(async (req, res) => {
  const products = await Product.find();
  if (products) {
    res.send(products);
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .send({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
  }
});

const getOne = catchAsync(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res
      .status(StatusCodes.NOT_FOUND)
      .send({ error: getReasonPhrase(StatusCodes.NOT_FOUND) });
  }
});

// ***** PATCH *********************/

// finds an user by ID and updates it
const updateById = catchAsync(async (req, res) => {});

// ***** DELETE *********************/

const deleteById = catchAsync(async (req, res) => {});

// ****** Controllers Export ******************/

module.exports = {
  create,
  getAll,
  getOne,
  updateById,
  deleteById,
};
