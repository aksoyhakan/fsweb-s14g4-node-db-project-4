/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const recipeData = [
  {
    tarif_adi: "Spagetti Bolonez",
    kayit_tarihi: new Date().toLocaleTimeString(),
  },
  { tarif_adi: "Omlet", kayit_tarihi: new Date().toLocaleTimeString() },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return await knex("recipes").insert(recipeData);
};
