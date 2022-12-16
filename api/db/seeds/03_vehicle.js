/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('vehicle').del()
  await knex('vehicle').insert([
    { id: 1, vehicle_type: 'van', miles: 63400, plate_number: 'G34989', description: '8 passenger van', location: 'P67-1', organization_id: 1 },
    { id: 2, vehicle_type: 'truck', miles: 67421, plate_number: 'G5WYY0', description: '4 door full-size pickup', location: 'P67-3', organization_id: 2 },
    { id: 3, vehicle_type: 'sedan', miles: 68410, plate_number: 'G34779', description: '4 door full-size sedan', location: 'P61-2', organization_id: 3 },
    { id: 4, vehicle_type: '5-Ton', miles: 8410, plate_number: 'G34782', description: '5-Ton cargo vehicle', location: 'P61-3', organization_id: 1 },
    { id: 5, vehicle_type: 'HMMWV;', miles: 20410, plate_number: 'G57821', description: 'High Mobility Multipurpose Wheeled Vehicle', location: 'P61-4', organization_id: 1 }
    { id: 6, vehicle_type: 'Mobilizer', miles: 20410, plate_number: 'G3478', description: 'Standard tactical trailer', location: 'P61-', organization_id: 1 }
  ]);
}
