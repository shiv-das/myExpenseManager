const express = require("express");

const router = express.Router();
const {
  fetchExpense,
  searchExpense,
  createExpense,
} = require("../controllers/expenseController");

router.get("/", fetchExpense);

router.post("/", createExpense);

router.get("/search", searchExpense);

module.exports = router;
