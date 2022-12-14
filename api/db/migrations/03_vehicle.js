/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema.createTable('vehicle', (table) => {
    table.increments('id');
    table.string('vehicle_type', 50).notNullable();
    table.string('miles', 50).notNullable();
    table.string('plate_number', 60).notNullable().unique();
    table.string('location', 60).notNullable();
    table.integer('organization_id').notNullable();
    table.foreign('organization_id').references('organization.id');
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable('vehicle', (table) => {
    table.dropForeign('organization_id');
  }).dropTableIfExists('vehicle');
};


