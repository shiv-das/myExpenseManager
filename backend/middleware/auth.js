const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  //const authHeader = localStorage.getItem("authorization");
  console.log(authHeader);
  //const token = authHeader;
  if (!authHeader) return res.sendStatus(401);

  jwt.verify(authHeader, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    console.log(user);
    next();
  });
};
module.exports = authenticateToken;
