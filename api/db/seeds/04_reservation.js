
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reservation').del()
  await knex('reservation').insert([
    {id: 1, vehicle_id: 1, member_id: 1, start_date: '2022-11-25', end_date: '2022-12-11', approved: false},
    {id: 2, vehicle_id: 2, member_id: 2, start_date: '2022-05-26', end_date: '2022-06-11', approved: true}
  ]);
};
