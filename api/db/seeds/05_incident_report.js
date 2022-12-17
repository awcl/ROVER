/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('incident_report').del()
  await knex('incident_report').insert([
    { id: 1, incident_type: 'ticket', incident_location: 'Vandenberg SFB', incident_date: '2022-05-26', incident_time: '9:30', incident_description: 'They were driving too slow and I was aggrevated', vehicle_id: 1, member_id: 1 },
    { id: 2, incident_type: 'crash', incident_location: 'The Streets', incident_date: '2022-04-20', incident_time: '4:20', incident_description: 'I was doing fine, and then I got high', vehicle_id: 2, member_id: 2 }
  ]);
};