/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // ^
  // ^
  await knex('member').del()
  await knex('member').insert([
    { id: 1, first_name: 'Santa', last_name: 'Claus', email: "s.claus1@email.com", rank: "SPC1", username: "bbb", password_hash: "$2b$12$hig73jSR/ccryE0pNivX7.SqN4DeovW1jXK7Drnq9QxxIKQgiTnA6", organization_id: 1, admin: true, is_van_cert: true, is_sedan_cert: false, is_truck_cert: false },
    { id: 2, first_name: 'Bingo', last_name: 'Claus', email: "b.claus1@email.com", rank: "TSgt", username: "aaa", password_hash: "$2b$12$/PdDxfNcLeGf6Cgg09EkcOG2bfv3rhAGOjkfwSLyGvhN9eZGsRvOu", organization_id: 1,admin: false, is_van_cert: false, is_sedan_cert: true, is_truck_cert: false },
    { id: 3, first_name: 'Test', last_name: 'Testington', email: "t.testington1@email.com", rank: "SPC4", username: "test", password_hash: "$2b$12$YobH2WZ8idc6UdCtUHcJ3u70a9Dt.TS5edX/FVa.91hkyIIJ6IMVq", organization_id: 1,admin: true, is_van_cert: false, is_sedan_cert: true, is_truck_cert: true }
  ]);
};
// https://bcrypt.online/