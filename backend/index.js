const express = require("express");
const app = express();
const connectDB = require("./config/database");
const cors = require("cors");
const path = require("path");
const adminRoutes = require("./routes/adminRoutes");
const expenseRoutes = require("./routes/expenseRoutes");
//connection to DataBase
connectDB();

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

app.use("/", adminRoutes);

app.use("/expenses", expenseRoutes);

app.get("/", (req, res) => {
  res.send("Welcome To Backend");
});

app.listen(8080, () => {
  console.log("listening to 8080...");
});
