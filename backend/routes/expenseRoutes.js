const express = require("express");

const router = express.Router();
const {
  fetchExpense,
  searchExpense,
  createExpense,
  deleteExpense,
} = require("../controllers/expenseController");

router.get("/", fetchExpense);

router.post("/", createExpense);

router.delete("/", deleteExpense);

router.get("/search", searchExpense);

module.exports = router;
