const express = require("express");
const recipeRoutes = require("./recipe/recipe-router.js");
const server = express();

server.use(express.json());
server.use("/api/recipes", recipeRoutes);

module.exports = server;
