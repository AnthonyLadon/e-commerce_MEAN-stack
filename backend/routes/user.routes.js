const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/", userController.create); // call create method from userController
router.get("/", userController.getAll); // call getAll method from userController
router.get("/:id", userController.getOne); // call getOne method from userController
router.patch("/:id", userController.updateById); // call update method from userController
router.delete("/:id", userController.deleteById); // call delete method from userController

module.exports = router;
