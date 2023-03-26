const jwt = require("jsonwebtoken");

exports.loginController = async (req, res) => {
  console.log(req.body);
  const user = req.body;

  //Secret Token should be stored in env files , for this project i have used it directly.
  const accessToken = jwt.sign(user, "abcd");

  if (!(req.body.email === "peer@gmail.com" && req.body.password === "1234")) {
    console.log("Email Password Invalid");
    return res.status(404).send("Email Pass not found");
  }
  console.log("Logged In");
  res.status(200).send({ authorization: accessToken });
};
