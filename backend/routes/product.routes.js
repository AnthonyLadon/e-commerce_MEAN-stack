const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.post("/", productController.create);
router.get("/", productController.getAll);
router.get("/:id", productController.getOne);
router.patch("/:id", productController.updateById);
router.delete("/:id", productController.deleteById);

module.exports = router;
