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
    { id: 3, unit_name: '688 CW', base: 'JBSA Lackland' },
    { id: 4, unit_name: '707 CS', base: 'North Pole' },
    { id: 5, unit_name: '707 FSS', base: 'Fort George G. Meade' },
    { id: 6, unit_name: '50 OSS', base: 'JBSA Lackland' },
    { id: 7, unit_name: '53 SOPS', base: 'Schriever SFB' },
    { id: 8, unit_name: 'USCYBERCOM', base: 'Fort George G. Meade' },
    { id: 9, unit_name: '323 TRS', base: 'JBSA Lackland' }
  ]);
};