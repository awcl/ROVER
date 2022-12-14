/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  await knex('organization').del()
  await knex('organization').insert([
    { id: 1, unit_name: '123 POPS', base: 'North Pole' },
    { id: 2, unit_name: '7 IS', base: 'Fort George G. Meade' },
    { id: 3, unit_name: '688 CW', base: 'JBSA Lackland' }
  ]);
};



