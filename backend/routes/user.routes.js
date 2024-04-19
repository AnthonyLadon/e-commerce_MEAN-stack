const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/signup", userController.signup);
router.get("/login", userController.login);
router.get("/", userController.getAll);
router.get("/:id", userController.getOne);
router.patch("/:id", userController.updateById);
router.delete("/:id", userController.deleteById);

module.exports = router;
