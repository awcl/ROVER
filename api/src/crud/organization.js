const express = require('express');
const app = express.Router();
module.exports = app;
const knex = require('knex')(require('../../knexfile')[process.env.NODE_ENV || 'development']);

app.get('/', (req, res) => { // Display all Organizations from organizations table in browser
  knex('organization')
      .select('*')
      .then(items => {
          res.status(200).send(items);
      }).catch(e => res.status(500).end())
  // http://localhost:8080/organization
});