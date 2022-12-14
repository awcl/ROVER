const express = require('express');
const app = express.Router();
module.exports = app;
const knex = require('knex')(require('../../knexfile')[process.env.NODE_ENV || 'development']);

// PATH/incident_report
app.get('/', (req, res) => { // Display all Incidents from incident_reports table in browser
  knex('incident_report')
      .select('*')
      .then(items => {
          res.status(200).send(items);
      });
  // http://localhost:8080/incident_report
});

// TODO GET Incident Report by Vehicle ID
app.get('/vehicle/:id', (req, res) => {
  let { id } = req.params;
  knex('incident_report')
      .where('vehicle_id', id)
      .then(items => {
          res.status(200).send(items);
      }).catch(e => console.log(e))
  // http://localhost:8080/incident_report/vehicle/1
})