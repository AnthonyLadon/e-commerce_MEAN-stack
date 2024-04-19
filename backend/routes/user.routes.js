const express = require("express");
const auth = require("../middlewares/auth"); // Before Router -> order of imports is important!
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/signup", auth, userController.signup);
router.get("/login", auth, userController.login);
router.get("/", auth, userController.getAll);
router.get("/:id", auth, userController.getOne);
router.patch("/:id", auth, userController.updateById);
router.delete("/:id", auth, userController.deleteById);

module.exports = router;
