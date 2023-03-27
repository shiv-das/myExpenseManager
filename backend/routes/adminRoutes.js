const express = require("express");
const router = express.Router();
const { loginController } = require("../controllers/adminController");
const { registerExpense } = require("../controllers/registerController");

//login route
router.post("/login", loginController);

//route to register Expense
router.post("/regiter", registerExpense);

module.exports = router;
