const express = require("express");
const app = express();
const cors = require("cors");
const adminRoutes = require("./routes/adminRoutes");

app.use(cors());
app.use(express.json());

app.use("/", adminRoutes);

app.get("/", (req, res) => {
  res.send("Welcome To Backend");
});

app.listen(8080, () => {
  console.log("listening to 8080...");
});
