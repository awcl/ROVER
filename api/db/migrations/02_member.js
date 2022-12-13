/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('member', (table) => {
    table.increments('id');
    table.string('first_name', 50).notNullable();
    table.string('last_name', 50).notNullable();
    table.string('rank', 50).notNullable();  
    table.string('username', 60).notNullable().unique();
    table.string('password_hash', 60).notNullable();
    table.integer('organization_id');
    table.foreign('organization_id').references('organization.id');
    table.boolean('is_van_cert').notNullable().defaultTo(false);
    table.boolean('is_sedan_cert').notNullable().defaultTo(false);
    table.boolean('is_truck_cert').notNullable().defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('member', table => {
    table.dropForeign('organization_id')
  }).dropTableIfExists('member');
};