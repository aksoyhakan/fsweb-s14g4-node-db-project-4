/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const ingredientData = [
  { icindekiler_adi: "zeytinyağı" },
  { icindekiler_adi: "yumurta" },
  { icindekiler_adi: "makarna" },
  { icindekiler_adi: "su" },
  { icindekiler_adi: "tuz" },
  { icindekiler_adi: "mantar" },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return await knex("ingredients").insert(ingredientData);
};
