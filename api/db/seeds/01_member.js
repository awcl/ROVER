/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  // ^
  // ^
  await knex('member').del()
  await knex('member').insert([
    {id: 1, first_name: 'Santa', last_name: 'Claus', rank: "PV1", username: "bbb", password_hash: "$2y$12$hig73jSR/ccryE0pNivX7.SqN4DeovW1jXK7Drnq9QxxIKQgiTnA6"},
    {id: 2, first_name: 'Santa', last_name: 'Claus', rank: "PV1", username: "aaa", password_hash: "$2b$12$/PdDxfNcLeGf6Cgg09EkcOG2bfv3rhAGOjkfwSLyGvhN9eZGsRvOu"}
  ]);
};
// https://bcrypt.online/