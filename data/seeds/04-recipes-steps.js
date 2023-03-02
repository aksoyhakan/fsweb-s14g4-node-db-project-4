/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const recipeStepPair = [
  { tarif_id: 1, adim_id: 1 },
  { tarif_id: 1, adim_id: 2 },
  { tarif_id: 1, adim_id: 3 },
  { tarif_id: 2, adim_id: 4 },
  { tarif_id: 2, adim_id: 5 },
  { tarif_id: 2, adim_id: 6 },
  { tarif_id: 2, adim_id: 7 },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return await knex("recipes-steps").insert(recipeStepPair);
};
