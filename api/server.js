const bcrypt = require('bcrypt');
const cors = require('cors');
const express = require('express');
const app = express();
const config = require('./knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(config);

app.use(express.json()).use(cors());
const { hash, compare } = bcrypt;
const SALTS = 12;

app.get('/', (req, res) => { // Home, ensure functionality
    res.set("Access-Control-Allow-Origin", "*").status(200).send('Got / 🙂');
});

module.exports = app;