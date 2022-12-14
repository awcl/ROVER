const express = require('express');
const app = express.Router();
module.exports = app;
const bcrypt = require('bcrypt');
const { hash, compare } = bcrypt;
const SALTS = 12;
const knex = require('knex')(require('../../knexfile')[process.env.NODE_ENV || 'development']);

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

// POST username and password for check against user table password_hash, 200 code = match
app.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await knex('member')
    .select('*')
    .where('username', username)
    .catch(err => { console.log(err) });
  if (user.length > 0) {
    compare(password, user[0].password_hash, (error, response) => {
      if (response) {
        req.session.user = user;
        console.log(req.session.user);
        res.status(200).send({ message: "User authenticated" });
      } else {
        res.status(403).send({ message: "Username or password incorrect" });
        console.log('403 triggered')
      }
    }).catch((e) => res.status(500).end());
  }
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
        username: req.body.username,
        password_hash: hashed,
        organization_id: req.body.organization_id,
        admin: req.body.admin,
        is_van_cert: req.body.van,
        is_sedan_cert: req.body.sedan,
        is_truck_cert: req.body.truck
      }
    )
    .then(res.status(201).end())
    .catch((e) => res.status(500).end())
  // http://localhost:8080/member/new
});