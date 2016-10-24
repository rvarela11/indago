const express = require('express');
const router = express.Router();
const Places = require('../modules/places');

router.get('/', function(req, res, next) {
  Places.list()
    .then((places) => {
      res.locals.places = places;
      res.render('pages/places');
    });
});



router.post('/new', function(req, res, next) {
  Places.insert()
    .then((places) => {

      res.render('pages/places', places);

    });
});

module.exports = router;
