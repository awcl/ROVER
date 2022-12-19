const express = require('express');
const app = express.Router();
module.exports = app;
const knex = require('knex')(require('../../knexfile')[process.env.NODE_ENV || 'development']);

// GET All Incident Reports from incident_report table
app.get('/', (req, res) => {
  knex('incident_report')
    .select('*')
    .orderBy('id', 'asc')
    .then(items => {
      res.status(200).send(items);
    }).catch(e => res.status(500).end())
  // http://localhost:8080/incident_report
});

// TODO GET Incident Report by Vehicle ID
app.get('/vehicle/:id', (req, res) => {
  let { id } = req.params;
  knex('incident_report')
    .where('vehicle_id', id)
    .then(items => {
      res.status(200).send(items);
    }).catch(e => res.status(500).end())
  // http://localhost:8080/incident_report/vehicle/1
});