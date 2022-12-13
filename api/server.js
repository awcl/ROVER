const bcrypt = require('bcrypt');
const cors = require('cors');
const express = require('express');
const app = express();
const config = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config);

app.use(express.json()).use(cors());
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

app.get('/vehicles', (req, res) => { // Display all Vehicles from vehicles table in browser
    knex('vehicles')
        .select('*')
        .then(items => {
            res.set("Access-Control-Allow-Origin", "*").status(200).send(items);
        });
});

app.get('/reports', (req, res) => { // Display all Incidents from incident_reports table in browser
    knex('incident_reports')
        .select('*')
        .then(items => {
            res.set("Access-Control-Allow-Origin", "*").status(200).send(items);
        });
});

module.exports = app;