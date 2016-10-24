const express = require('express');
const router = express.Router();
const knex = require('../db/connection.js');

router.get('/', function(req, res, next) {

  if (req.session.loggedIn === true) {

    return res.render('index', {
      user : req.session.user[0] || req.session.user,
    });
  }
  res.render('index');
});

router.get('/error', function(req, res, next) {
  console.log('pages/error');
  res.render('pages/error');

});
router.get('/robertCSS', function(req, res, next) {
  res.render('pages/plan-details');
});



module.exports = router;
