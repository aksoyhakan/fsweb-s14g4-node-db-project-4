/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const ingredientData = [
  { tarif_id: 1, adim_id: 2, icindekiler_id: 4, miktar: 2.5 },
  { tarif_id: 1, adim_id: 3, icindekiler_id: 3, miktar: 5 },
  { tarif_id: 1, adim_id: 3, icindekiler_id: 6, miktar: 0.005 },
  { tarif_id: 2, adim_id: 5, icindekiler_id: 1, miktar: 3 },
  { tarif_id: 2, adim_id: 6, icindekiler_id: 2, miktar: 75.6 },
  { tarif_id: 2, adim_id: 6, icindekiler_id: 5, miktar: 87 },
  { tarif_id: 2, adim_id: 7, icindekiler_id: 6, miktar: 41 },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return await knex("quantity").insert(ingredientData);
};
