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

app.get('/merged', (req, res) => { // List All Items With Merged Data from User Table
  knex('reservation')
    .join('member', 'reservation.member_id', 'member.id')
    .join('vehicle', 'reservation.vehicle_id', 'vehicle.id')
    .select('*')
    .then(items => {
      res.status(200).send(items);
    });
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

//Post method that will be used to create a reservation
app.post('/', async (req, res) => {
  console.log('Reservation add called');
  let num = (await knex('member').max('id as max').first()).max + 1;
  try{
      await knex('reservation').insert({
          'id': num,
          'vehicle_id': req.body.vehicle_id,
          'member_id':req.body.member_id,
          'start_date': req.body.start_date,
          'end_date': req.body.end_date,
          'approved': false
      }).then(data => res.status(201).end(data))
  } catch (e){
    res.status(500).end();
  }
})

//Patch method for Admin users to approve pending reservations
app.patch('/:id', async (req, res) => {
  console.log('Reservation patch has been called');
      // console.log('Reservation Patch Requested: Patched Reservation');
      // console.log('Reservation Patch Requested: Patched Reservation', updatedReservation);
      try {await knex('reservation').where('id', req.params.id).update({approved: true}).then( data =>
        res.status(200).end()
      ).catch(e => res.status(403).end());} catch (e) {res.status(500).end();}
})
app.delete('/:id', async (req, res) => {
  await knex('reservation').where('id', req.params.id)
  .del()
  .then( data =>
    res.status(410).end()
  ).catch(e => res.status(500).end());
})


