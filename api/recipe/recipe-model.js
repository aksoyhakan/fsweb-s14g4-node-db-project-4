const db = require("../../data/db-config");

async function dataAdjuster() {
  const recipes = await db("recipes");
  const steps = await db("recipes-steps as rs")
    .leftJoin("steps as st", "rs.adim_id", "st.adim_id")
    .orderBy("st.adim_sirasi", "asc");
  const ingredients = await db("quantity as q")
    .leftJoin("recipes as r", "r.tarif_id", "q.tarif_id")
    .leftJoin("steps as st", "st.adim_id", "q.adim_id")
    .leftJoin("ingredients as i", "q.icindekiler_id", "i.icindekiler_id");

  let returnArray = [];

  recipes.forEach((recipe) => {
    let adimArray = [];
    steps.forEach((step) => {
      if (step["tarif_id"] === recipe["tarif_id"]) {
        let içerikArray = [];
        ingredients.forEach((ingredient) => {
          if (ingredient["adim_id"] === step["adim_id"]) {
            let içerikObj = {
              icindekiler_id: ingredient["icindekiler_id"],
              icindekiler_adi: ingredient["icindekiler_adi"],
              miktar: ingredient["miktar"],
            };
            içerikArray.push(içerikObj);
          }
        });
        let newStep = {
          adim_id: step["adim_id"],
          adim_sirasi: step["adim_sirasi"],
          adim_talimati: step["adim_talimati"],
          icindekiler: içerikArray,
        };
        adimArray.push(newStep);
      }
    });
    let recipeObject = {
      tarif_id: recipe["tarif_id"],
      tarif_adi: recipe["tarif_adi"],
      kayit_tarihi: recipe["kayit_tarihi"],
      adimlar: adimArray,
    };
    returnArray.push(recipeObject);
  });
  return returnArray;
}

async function getAllRecipe() {
  return await dataAdjuster();
}

async function getRecipeById(tarif_id) {
  let allRecipes = await dataAdjuster();
  let returnRecipe = allRecipes.find(
    (recipe) => recipe["tarif_id"] == tarif_id
  );
  return returnRecipe;
}

module.exports = { getAllRecipe, getRecipeById };
