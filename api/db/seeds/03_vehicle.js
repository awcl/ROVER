/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('vehicle').del()
  await knex('vehicle').insert([
    { id: 1, vehicle_type: 'van', miles: 63400, plate_number: 'G34989', location: 'P67-1', organization_id: 1 },
    { id: 2, vehicle_type: 'truck', miles: 67421, plate_number: 'G5WYY0', location: 'P67-3', organization_id: 2 },
    { id: 3, vehicle_type: 'sedan', miles: 68410, plate_number: 'G34779', location: 'P61-2', organization_id: 3 }
  ]);
};
