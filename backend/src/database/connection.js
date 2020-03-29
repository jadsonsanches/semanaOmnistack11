const kex = require('knex');
const configuration = require('../../knexfile');

const connection = kex(configuration.development);

module.exports = connection;