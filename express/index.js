const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const m1 = (req, res, next) => {
  console.log("m1");
  next();
};

app.get("/home", m1, (req, res) => {
  // res.send('Home Page');
  return res.json({
    name: "Chandan",
    age: 26,
    job: "Software Engineer",
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
