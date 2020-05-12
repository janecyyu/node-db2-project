const knex = require("knex");
const knexFile = require("../knexfile");
const environment = process.env.NODE_ENV || "development"; // undefined|production
module.exports = knex(knexFile[environment]);
