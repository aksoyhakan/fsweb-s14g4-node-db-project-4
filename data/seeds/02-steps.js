/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

let sira = 0;
function adimSirasi() {
  return ++sira;
}

const stepData = [
  {
    adim_sirasi: adimSirasi(),
    adim_talimati: "Büyük bir tencereyi orta ateşe koyun",
  },
  {
    adim_sirasi: adimSirasi(),
    adim_talimati: "Tencereye su koyun",
  },
  {
    adim_sirasi: adimSirasi(),
    adim_talimati: "Makarna ve mantarı tencerenin içine koyun",
  },
  {
    adim_sirasi: adimSirasi(),
    adim_talimati: "Tavayı orta ateşe koyun",
  },
  {
    adim_sirasi: adimSirasi(),
    adim_talimati: "Tavaya zeytinyağını dökün",
  },
  {
    adim_sirasi: adimSirasi(),
    adim_talimati: "Yumurtaları kırıp tavaya atın üstüne tuz serpiştirin",
  },
  {
    adim_sirasi: adimSirasi(),
    adim_talimati: "Üzerine az bir şey mantar attın",
  },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  return await knex("steps").insert(stepData);
};
