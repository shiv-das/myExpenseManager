const express = require("express");

const router = express.Router();
const { fetchExpense } = require("../controllers/fetchController");

router.get("/", fetchExpense);

module.exports = router;
