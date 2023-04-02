const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  const user = req.query.user;

  res.send(user + "!");
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
