const express = require('express');
const router = express.Router();
//connection to the database
const knex = require('../db/knex')


/* GET home page. */
router.get('/api/users', function(req, res, next) {
  // console.log('KEN' + knex)
  // res.render('index');
  knex('users')
  //selects all the rows from the todo table
  .select()
  //then with the rows pass into the all view with the prop of todo
  .then(data => {
    res.json(data)
    console.log(data)
  })
});


module.exports = router;
