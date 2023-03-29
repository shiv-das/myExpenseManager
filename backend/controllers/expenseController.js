const Expense = require("../models/expenseSchema");
var mongoose = require("mongoose");
const _ = require("lodash");

exports.fetchExpenses = async (req, res, next) => {
  console.log(req.query);
  console.log(req.headers);
  const pageNum = req.query.pageNum + 1;
  const itemsPerPage = req.query.itemsPerPage;
  try {
    const expenses = await Expense.find()
      .skip((pageNum - 1) * 100)
      .sort({ id: -1 });

    res.send(expenses);
  } catch (error) {
    console.log("Can't fetch Expenses" + error);
  }
};

exports.createExpense = async (req, res) => {
  try {
    const { name, description, category, dateOfExpense, amount } = req.body;
    //console.log(dateOfExpense);
    const result = await Expense.create({
      name: name,
      description: description,
      category: category,
      dateOfExpense: dateOfExpense,
      amount: amount,
    });
    console.log(result);
    res.status(200).send(result);
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};

exports.editExpense = async (req, res) => {
  try {
    console.log(req.body);

    const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    //const expenses = await Expense.find();
    console.log(expense);
    res.status(200).send(expense);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    console.log(req.params);

    const expense = await Expense.findByIdAndDelete(req.params.id);
    //const expenses = await Expense.find();
    res.status(200).send(expense);
  } catch (error) {
    console.log(error);
  }
};

exports.fetchExpense = async (req, res) => {
  try {
    console.log(req.params);

    const expense = await Expense.findById(req.params.id);

    res.status(200).send(expense);
  } catch (error) {
    console.log(error);
  }
};

exports.searchExpense = async (req, res, next) => {
  console.log(req.query);
  const { searchByName, filterByDateField } = req.query;

  try {
    if (searchByName && !filterByDateField) {
      const expenses = await Expense.find();
      const filteredExpense = Object.values(expenses).filter((expense) => {
        return expense.description
          .toLowerCase()
          .includes(searchByName.toLowerCase());
      });
      console.log(filteredExpense);
      res.send(filteredExpense);
    } else if (!searchByName && filterByDateField) {
      var mydate = new Date(filterByDateField);
      console.log(mydate);
      const expenses = await Expense.find();
      const filteredExpense = Object.values(expenses).filter((expense) => {
        return expense.dateOfExpense.getDate() == mydate.getDate();
      });
      console.log(filteredExpense);
      res.send(filteredExpense);
    } else if (searchByName && filterByDateField) {
      var mydate = new Date(filterByDateField);
      console.log(mydate);

      const expenses = await Expense.find();
      const filteredExpense = Object.values(expenses).filter((expense) => {
        return (
          expense.dateOfExpense.getDate() == mydate.getDate() &&
          expense.description.toLowerCase().includes(searchByName.toLowerCase())
        );
      });
      res.send(filteredExpense);
    } else {
      const expenses = await Expense.find();
      res.send(expenses);
    }
  } catch (error) {
    res.status(404).send(error);
    console.log(error);
  }
};
