const bcrypt = require('bcrypt');
const cors = require('cors');
const express = require('express');
const app = express();
const config = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config);

app.use(express.json()).use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true // enable set cookie
}));
const { hash, compare } = bcrypt;
const SALTS = 12;

app.get('/', (req, res) => {
    res.set("Access-Control-Allow-Origin", "*").status(200).send('Got / 🙂');
});

app.get('/member', (req, res) => { // Display all Members from members table in browser
    knex('member')
        .select('*')
        .then(items => {
            res.set("Access-Control-Allow-Origin", "*").status(200).send(items);
        });
});

app.get('/organization', (req, res) => { // Display all Organizations from organizations table in browser
    knex('organization')
        .select('*')
        .then(items => {
            res.set("Access-Control-Allow-Origin", "*").status(200).send(items);
        });
});

app.get('/reservation', (req, res) => { // Display all Reservations from reservations table in browser
    knex('reservation')
        .select('*')
        .then(items => {
            res.set("Access-Control-Allow-Origin", "*").status(200).send(items);
        });
});

app.get('/vehicle', (req, res) => { // Display all Vehicles from vehicles table in browser
    knex('vehicle')
        .select('*')
        .then(items => {
            res.set("Access-Control-Allow-Origin", "*").status(200).send(items);
        });
});

app.get('/report', (req, res) => { // Display all Incidents from incident_reports table in browser
    knex('incident_report')
        .select('*')
        .then(items => {
            res.set("Access-Control-Allow-Origin", "*").status(200).send(items);
        });
});

app.post('/login', async (req, res) => { // Authentication
    let hashed = await (knex('member').where('username', req.body.username.toLowerCase()).select('password_hash'));
    try {
      hashed = hashed[0].password_hash;
      compare(req.body.password, hashed)
        .then(match =>  match ? res.status(200).end() : res.status(403).end())
    } catch (e) {
      res.status(500).end();
    }
  });

module.exports = app;