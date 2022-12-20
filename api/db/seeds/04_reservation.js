
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reservation').del()
  await knex('reservation').insert([
    { id: 1, vehicle_id: 1, member_id: 1, start_date: '2022-11-25', end_date: '2022-12-11', approved: false, description: '', status: 'pending' },
    { id: 2, vehicle_id: 2, member_id: 2, start_date: '2022-05-26', end_date: '2022-06-11', approved: true, description: `help i'm stuck in a db`, status: 'approved' },
    { id: 3, vehicle_id: 3, member_id: 3, start_date: '2022-06-26', end_date: '2022-11-11', approved: true, description: `nope`, status: 'denied' }
  ]);
};