const express = require("express");
const router = express.Router();
const loginController = require("../controllers/adminController");

//login route
router.post("/login", loginController);
