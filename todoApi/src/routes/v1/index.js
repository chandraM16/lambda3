const express = require("express");
const { testController } = require("../../controllers/testController");

const v1Router = express.Router();

v1Router.get("/test", testController);

module.exports = v1Router;
