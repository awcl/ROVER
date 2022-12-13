/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('incident_report', (table) => {
    table.increments('id');
    table.string('incident_type', 50).notNullable();
    table.string('incident_location', 50).notNullable();
    table.string('incident_date', 50).notNullable();
    table.string('incident_time', 50).notNullable();
    table.string('incident_description', 50).notNullable();
    table.integer('vehicle_id', 50).notNullable();
    table.foreign('vehicle_id').references('vehicle.id');
    table.integer('member_id', 50).notNullable();
    table.foreign('member_id').references('member.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('incident_report', (table) => {
    table.dropForeign('member_id');
    table.dropForeign('vehicle_id');
  }).dropTableIfExists('incident_report');
};
