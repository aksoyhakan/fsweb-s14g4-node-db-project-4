const RecipeModels = require("./recipe-model");

const checkRecipeID = (req, res, next) => {
  RecipeModels.getRecipeById(req.params.id).then((response) =>
    response
      ? next()
      : next({ code: 404, message: `ID no ${req.params.id} recipe not found ` })
  );
};

module.exports = { checkRecipeID };
