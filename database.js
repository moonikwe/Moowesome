const Sequelize = require('sequelize');

const connectionUrl = 'postgres://moo:moowesome@localhost:5432/moowesome';
const database = new Sequelize(connectionUrl);

module.exports = database;