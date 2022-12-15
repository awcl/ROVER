const cors = require('cors');
const express = require('express');
const router = express.Router();
const app = express();
const knex = require('knex')(require('../knexfile')[process.env.NODE_ENV || 'development']);

app.use(express.json())
    // .use(cors({
    //     origin: ['http://localhost:3000'],
    //     methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    //     credentials: true // enable set cookie
    // }));
    .use(cors())

app.use('/incident_report', require('./crud/incident_report'));
app.use('/member', require('./crud/member'));
app.use('/organization', require('./crud/organization'));
app.use('/reservation', require('./crud/reservation'));
app.use('/vehicle', require('./crud/vehicle'));

app.get('/', (req, res) => {
    res.status(200).send('Got / 🙂');
});

module.exports = app;