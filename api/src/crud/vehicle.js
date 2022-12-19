const express = require('express');
const app = express.Router();
module.exports = app;
const knex = require('knex')(require('../../knexfile')[process.env.NODE_ENV || 'development']);

app.get('/', (req, res) => { // Display all Vehicles from vehicles table in browser
  knex('vehicle')
    .select('*')
    .orderBy('id', 'asc')
    .then(items => {
      res.status(200).send(items);
    }).catch(e => console.log(e))
  // http://localhost:8080/vehicle
});

// GET Query Vehicle by Vehicle ID >>>> TODO Validate + Connect
app.get('/:id', (req, res) => {
  let { id } = req.params;
  knex('vehicle')
    .where('id', id)
    .then(items => {
      res.status(200).send(items);
    }).catch(e => res.status(500).end())
  // http://localhost:8080/vehicle/1
});

// Query Vehicle by Org ID >>>> TODO Validate + Connect
app.get('/organization/:id', (req, res) => {
  let { id } = req.params;
  knex('vehicle')
    .where('organization_id', id)
    .orderBy('id', 'asc')
    .then(items => {
      res.status(200).send(items);
    }).catch(e => res.status(500).end())
  // http://localhost:8080/vehicle/organization/1
});