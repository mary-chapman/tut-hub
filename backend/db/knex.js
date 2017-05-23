//connects to the database depending on the environment
const environment  = process.env.NODE_ENV || 'development'
//const config = require('../knexfile')[environment]
const config = require('../knexfile')[environment]
//connects the database to the knex library
module.exports = require('knex')(config)


//console.log(environment)
