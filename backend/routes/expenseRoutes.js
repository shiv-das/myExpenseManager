const express = require("express");

const router = express.Router();
const {
  fetchExpenses,
  fetchExpense,
  searchExpense,
  createExpense,
  deleteExpense,
  editExpense,
} = require("../controllers/expenseController");

router.get("/", fetchExpenses);

router.get("/search/", searchExpense);

router.get("/:id", fetchExpense);

router.post("/", createExpense);

router.post("/edit/:id", editExpense);

router.delete("/:id", deleteExpense);

module.exports = router;
