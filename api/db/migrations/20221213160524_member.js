/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('member', (table) => {
    table.increments();
    table.string('first_name', 50).notNullable();
    table.string('last_name', 50).notNullable();
    table.string('rank', 50).notNullable();
    //table.string('authorized_vehicles', 50).notNullable(); // leaving commented since it is a foreign key
    //table.string('org_id', 50).notNullable(); // leaving commented since it is a foreign key
    table.string('username', 60).notNullable().unique();
    table.string('password_hash', 60).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('member');
};
