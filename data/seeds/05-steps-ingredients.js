/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const stepIngredientPairs = [
  { adim_id: 1 },
  { adim_id: 2, icindekiler_id: 4 },
  { adim_id: 3, icindekiler_id: 3 },
  { adim_id: 3, icindekiler_id: 6 },
  { adim_id: 4 },
  { adim_id: 5, icindekiler_id: 1 },
  { adim_id: 6, icindekiler_id: 2 },
  { adim_id: 6, icindekiler_id: 5 },
  { adim_id: 7, icindekiler_id: 6 },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return await knex("steps-ingredients").insert(stepIngredientPairs);
};
