const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const adminRoutes = require("./routes/adminRoutes");

app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

app.use("/", adminRoutes);

app.get("/", (req, res) => {
  res.send("Welcome To Backend");
});

app.listen(8080, () => {
  console.log("listening to 8080...");
});
