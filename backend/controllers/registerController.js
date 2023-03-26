const Expense = require("../models/expenseSchema");
const mongoose = require("mongoose");

exports.registerExpense = async (req, res) => {
  try {
    const { name, description, category, dateOfExpense, amount } = req.body;
    console.log(dateOfExpense);
    const result = await Patient.create({
      name: name,
      description: description,
      category: category,
      dateOfExpense: dateOfExpense,
      amount: amount,
    });
    console.log(result);
    res.status(200).send("Expense Registered!");
  } catch (error) {
    console.log(error);
    res.status(404);
  }
};
