const express = require('express');
const app = express.Router();
module.exports = app;
const knex = require('knex')(require('../../knexfile')[process.env.NODE_ENV || 'development']);

app.get('/', (req, res) => { // Display all Reservations from reservations table in browser
  knex('reservation')
      .select('*')
      .then(items => {
          res.status(200).send(items);
      });
  // http://localhost:8080/reservation
});

// GET Reservation by Member ID  >>>> TODO Validate + Connect // TODO Add isApproved bool to table/logic
app.get('/member/:id', (req, res) => {
  let { id } = req.params;
  knex('reservation')
      .where('member_id', id)
      .then(items => {
          res.status(200).send(items);
      }).catch(e => console.log(e))
  // http://localhost:8080/reservation/member/1
})

// GET Reservation by Vehicle ID  >>>> TODO Validate + Connect // TODO Add isApproved bool to table/logic
app.get('/vehicle/:id', (req, res) => {
  let { id } = req.params;
  knex('reservation')
      .where('vehicle_id', id)
      .then(items => {
          res.status(200).send(items);
      }).catch(e => res.status(500).end())
  // http://localhost:8080/reservation/vehicle/1
});