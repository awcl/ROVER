/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('reservation', (table) => {
    table.increments('id');
    table.integer('vehicle_id').notNullable();
    table.foreign('vehicle_id').references('vehicle.id');
    table.integer('member_id').notNullable();
    table.foreign('member_id').references('member.id');
    table.date('start_date').notNullable();
    table.date('end_date').notNullable();
    table.boolean('approved').notNullable().defaultTo(false);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.alterTable('reservation', (table) => {
    table.dropForeign('member_id');
    table.dropForeign('vehicle_id');
  })
    .then(function () {
      knex.schema.dropTableIfExists('reservation');
    });
}
