const express = require("express");
const { port } = require("../config");
const apiRouter = require("./routes");

const app = express();

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
