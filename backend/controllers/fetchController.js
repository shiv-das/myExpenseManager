const Expense = require("../models/expenseSchema");
var mongoose = require("mongoose");

exports.fetchExpense = async (req, res, next) => {
  console.log(req.query);
  console.log(req.headers);
  const pageNum = req.query.pageNum + 1;
  const itemsPerPage = req.query.itemsPerPage;
  try {
    const expenses = await Expense.find().skip((pageNum - 1) * 100);

    res.send(expenses);
  } catch (error) {
    console.log("Can't fetch Expenses" + error);
  }
};
