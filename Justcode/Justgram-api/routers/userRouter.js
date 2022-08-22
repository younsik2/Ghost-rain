const express = require("express");
const router = express.Router();

const userController = require("../userController");

router.post("/signup", userController.createUser);
router.post("/login", userController.logInUser);

module.exports = router;