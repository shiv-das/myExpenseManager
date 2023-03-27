const express = require("express");

const router = express.Router();
const { fetchExpense } = require("../controllers/fetchController");
const { searchExpense } = require("../controllers/searchController");

router.get("/", fetchExpense);

router.get("/search", searchExpense);

module.exports = router;
