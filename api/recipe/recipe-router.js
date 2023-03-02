const express = require("express");
const RecipeModels = require("./recipe-model");
const md = require("./recipe-middleware");

const route = express.Router();

route.use(express.json());

function errorObjectCreator(code, message) {
  return { code: code, message: message };
}

route.get("/", (req, res, next) => {
  RecipeModels.getAllRecipe()
    .then((response) => res.status(200).json(response))
    .then((err) => next(errorObjectCreator(500, "database problem")));
});

route.get("/:id", md.checkRecipeID, (req, res, next) => {
  RecipeModels.getRecipeById(req.params.id)
    .then((response) => res.status(200).json(response))
    .then((err) => next(errorObjectCreator(500, "database problem")));
});

route.use((err, req, res, next) => {
  res.status(err.code).json({ message: err.message });
});

module.exports = route;
