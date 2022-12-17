const express = require('express');
const app = express.Router();
module.exports = app;
const bcrypt = require('bcrypt');
const { hash, compare } = bcrypt;
const SALTS = 12;
const knex = require('knex')(require('../../knexfile')[process.env.NODE_ENV || 'development']);


// const encryptPassword = async (password) => {
//   const hash = await bcrypt.hash(password, SALTS);
//   return hash;
// }

// const comparePassword = async (password, hash) => {
//   try {
//     const isMatch = await bcrypt.compare(password, hash);
//     return isMatch;
//   } catch (error) {
//     console.log(error)
//     throw "Error comparing password";
//   }

//}
// GET All Members from member table
app.get('/', (req, res) => {
  knex('member')
    .select('*')
    .then(items => {
      res.status(200).send(items);
    }).catch(e => res.status(500).end())
  // http://localhost:8080/member
});

// GET All Incident Reports from incident_reports table by ID
app.get('/:id', (req, res) => {
  let { id } = req.params;
  knex('member')
    .where('id', id)
    .then(items => {
      res.status(200).send(items);
    }).catch(e => res.status(500).end())
  // http://localhost:8080/member/1
});

// POST username and password for check against user table password_hash, 200 = match, 403 = wrong, 500 = server issue
app.post('/login', async (req, res) => {
  try {
    let { username, password } = req.body;
    const hashed = await knex('member').where('username', username).select('*');
    console.log(hashed[0])
    const match = await compare(password, hashed[0].password_hash);
    console.log(match)
    match ? res.status(200).send(hashed[0]) : res.status(403).end()
  } catch (e) { res.status(500).send(e) }
  // http://localhost:8080/member/login
});

// POST New Account >>>> TODO Validate + Connect
app.post('/new', async (req, res) => {
  let num = (await knex('member').max('id as max').first()).max + 1;
  let hashed = await hash(req.body.password, SALTS);
  knex('member')
    .insert(
      {
        id: num,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        rank: req.body.rank,
        email: req.body.email,
        username: req.body.username,
        password_hash: hashed,
        organization_id: req.body.organization_id,
        admin: false,
        is_van_cert: false,
        is_sedan_cert: false,
        is_truck_cert: false
      }
    )
    .then(res.status(201).end())
    .catch((e) => res.status(500).end())
  // http://localhost:8080/member/new
});