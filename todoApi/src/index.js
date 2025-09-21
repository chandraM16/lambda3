const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT ;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});