require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[env];
const knex = require('knex')(config);
const { Model } = require('objection');
Model.knex(knex);

module.exports = exports = Model;
