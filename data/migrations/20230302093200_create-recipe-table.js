/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema

    .createTable("recipes", (tbl) => {
      tbl.increments("tarif_id");
      tbl.text("tarif_adi", 128).unique().notNullable();
      tbl.text("kayit_tarihi", 128).notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.increments("adim_id");
      tbl.integer("adim_sirasi").unsigned().notNullable();
      tbl.text("adim_talimati", 128).notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("icindekiler_id");
      tbl.text("icindekiler_adi").notNullable();
    })
    .createTable("recipes-steps", (tbl) => {
      tbl.increments();
      tbl
        .integer("tarif_id")
        .unsigned()
        .references("tarif_id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("adim_id")
        .unsigned()
        .references("adim_id")
        .inTable("steps")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["tarif_id", "adim_id"]);
    })
    .createTable("steps-ingredients", (tbl) => {
      tbl.increments();
      tbl
        .integer("adim_id")
        .unsigned()
        .references("adim_id")
        .inTable("steps")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("icindekiler_id")
        .unsigned()
        .references("icindekiler_id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["adim_id", "icindekiler_id"]);
    })
    .createTable("quantity", (tbl) => {
      tbl.increments();
      tbl
        .integer("tarif_id")
        .unsigned()
        .references("tarif_id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("adim_id")
        .unsigned()
        .references("adim_id")
        .inTable("steps")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("icindekiler_id")
        .unsigned()
        .references("icindekiler_id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.decimal("miktar").unsigned().notNullable();
      tbl.primary(["tarif_id", "adim_id", "icindekiler_id"]);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("quantity")
    .dropTableIfExists("steps-ingredients")
    .dropTableIfExists("recipes-steps")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
