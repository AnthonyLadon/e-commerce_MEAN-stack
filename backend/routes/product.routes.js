const express = require("express");
const auth = require("../middlewares/auth"); // Before Router -> order of imports is important!
const router = express.Router();
const productController = require("../controllers/product.controller");

router.post("/", auth, productController.create);
router.get("/", productController.getAll);
router.get("/:id", productController.getOne);
router.patch("/:id", auth, productController.updateById);
router.delete("/:id", auth, productController.deleteById);

module.exports = router;
