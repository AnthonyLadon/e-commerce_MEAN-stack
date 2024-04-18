const mongoose = require("mongoose");
const Product = require("../models/Product");
const catchAsync = require("../helpers/catchAsync"); // error handling function
const { StatusCodes } = require("http-status-codes");

// ***** CREATE *********************/

const create = catchAsync(async (req, res) => {
  const data = req.body;
});

// ***** GET *********************/

const getAll = catchAsync(async (req, res) => {});

const getOne = catchAsync(async (req, res) => {});

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
