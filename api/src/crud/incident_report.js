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

//Post method that will be used to create an incident report
app.post('/', async (req, res) => {
  console.log('Incident report add called');
  let num = (await knex('incident_report').max('id as max').first()).max + 1;
  try {
    await knex('incident_report').insert({
      'id': num,
      'incident_type': req.body.incident_type,
      'incident_location': req.body.incident_location,
      'incident_date': req.body.incident_date,
      'incident_time': req.body.incident_time,
      'incident_description' : req.body.incident_description,
      'vehicle_id': req.body.vehicle_id,
      'member_id': req.body.member_id
    }).then(data => res.status(201).end())
  } catch (e) {
    res.status(500).end();
  }
  // http://localhost:8080/incident_report
})

// table.increments('id');
//       table.string('incident_type', 50).notNullable();
//       table.string('incident_location', 50).notNullable();
//       table.string('incident_date', 50).notNullable();
//       table.string('incident_time', 50).notNullable();
//       table.string('incident_description', 50).notNullable();
//       table.integer('vehicle_id').notNullable();
//       table.foreign('vehicle_id').references('vehicle.id').onDelete('CASCADE').onUpdate('CASCADE');
//       table.integer('member_id').notNullable();
//       table.foreign('member_id').references('member.id').onDelete('CASCADE').onUpdate('CASCADE');