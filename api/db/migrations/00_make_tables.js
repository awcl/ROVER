/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = function (knex) {
  return knex.schema
    .createTable('organization', (table) => {
      table.increments('id');
      table.string('unit_name', 50).notNullable();
      table.string('base', 50).notNullable();
    })
    .createTable('member', (table) => {
      table.increments('id');
      table.string('first_name', 50).notNullable();
      table.string('last_name', 50).notNullable();
      table.string('email', 50).notNullable();
      table.string('rank', 50).notNullable();
      table.string('username', 50).notNullable().unique();
      table.string('password_hash', 60).notNullable();
      table.integer('organization_id');
      table.boolean('admin').notNullable();
      table.foreign('organization_id').references('organization.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.boolean('is_van_cert').notNullable().defaultTo(false);
      table.boolean('is_sedan_cert').notNullable().defaultTo(false);
      table.boolean('is_truck_cert').notNullable().defaultTo(false);
      table.boolean("is_5_ton_cert").notNullable().defaultTo(false);
      table.boolean("is_amrap_cert").notNullable().defaultTo(false);
      table.boolean("is_hmmwv_cert").notNullable().defaultTo(false);
      table.boolean("is_mobilizer_cert").notNullable().defaultTo(false);
      table.boolean("is_patrol_cert").notNullable().defaultTo(false);
      table.boolean("is_tank_cert").notNullable().defaultTo(false);
      table.boolean("is_semitruck_cert").notNullable().defaultTo(false);
      table.boolean("is_landrover_cert").notNullable().defaultTo(false);
      table.boolean("is_forklift_cert").notNullable().defaultTo(false);
    })
    .createTable('vehicle', (table) => {
      table.increments('id');
      table.string('vehicle_type', 50).notNullable();
      table.string('miles', 50).notNullable();
      table.string('plate_number', 60).notNullable().unique();
      table.string('description', 250).notNullable();
      table.string('location', 60).notNullable();
      table.integer('organization_id').notNullable();
      table.foreign('organization_id').references('organization.id').onDelete('CASCADE').onUpdate('CASCADE');
    })
    .createTable('reservation', (table) => {
      table.increments('id');
      table.integer('vehicle_id').notNullable();
      table.foreign('vehicle_id').references('vehicle.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.integer('member_id').notNullable();
      table.foreign('member_id').references('member.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.date('start_date').notNullable();
      table.date('end_date').notNullable();
      table.boolean('approved').notNullable().defaultTo(false);
      table.string('description', 1000);
      table.string('status', 50);
    })
    .createTable('incident_report', (table) => {
      table.increments('id');
      table.string('incident_type', 50).notNullable();
      table.string('incident_location', 50).notNullable();
      table.string('incident_date', 50).notNullable();
      table.string('incident_time', 50).notNullable();
      table.string('incident_description', 50).notNullable();
      table.integer('vehicle_id').notNullable();
      table.foreign('vehicle_id').references('vehicle.id').onDelete('CASCADE').onUpdate('CASCADE');
      table.integer('member_id').notNullable();
      table.foreign('member_id').references('member.id').onDelete('CASCADE').onUpdate('CASCADE');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .alterTable('member', (table) => {
      table.dropForeign('organization_id');
    })
    .alterTable('vehicle', (table) => {
      table.dropForeign('organization_id');
    })
    .alterTable('reservation', (table) => {
      table.dropForeign('vehicle_id');
      table.dropForeign('member_id');
    })
    .alterTable('incident_report', (table) => {
      table.dropForeign('vehicle_id');
      table.dropForeign('member_id');
    })
    .dropTableIfExists('organization')
    .dropTableIfExists('member')
    .dropTableIfExists('vehicle')
    .dropTableIfExists('reservation')
    .dropTableIfExists('incident_report');
};