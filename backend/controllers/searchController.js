const Expense = require("../models/expenseSchema");
var mongoose = require("mongoose");

exports.searchExpense = async (req, res, next) => {
  console.log(req.query);
  const { searchByName } = req.query;
  try {
    if (searchByName) {
      const expenses = await Expense.find();
      const filteredExpense = Object.values(expenses).filter((expense) => {
        return expense.description
          .toLowerCase()
          .includes(searchByName.toLowerCase());
      });
      console.log(filteredExpense);
      res.send(filteredExpense);
    } else {
      const expenses = await Expense.find();
      res.send(expenses);
    }
  } catch (error) {}
};
