const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  description: {
    type: String,
    required: true,
    index: true,
  },
  category: {
    type: String,
    enum: {
      values: ["Books", "Health", "Electronics", "Travel", "Education"],
      message: " is not supported",
    },
    index: true,
  },
  dateOfExpense: {
    type: Date,
    required: true,
    index: true,
  },
  amount: {
    type: Number,
    required: true,
    index: true,
  },
});

module.exports = mongoose.model("Expense", expenseSchema);
