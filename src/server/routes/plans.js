const router = require('express').Router();
const knex = require('../db/connection.js');
const Plans = require('../modules/plans');
const Places = require('../modules/places');

router.get('/:id/upvote', (req, res) => {
  let planID = req.params.id;
  knex('plans').where('id', planID).first().then((id) => {
    var newScore = (++id.upvote);
    knex('plans').where({
      id: planID
    }).update({
      upvote: newScore,
    }).then(() => {
      res.redirect('back');
    });
  });
});

router.get('/cities/:city', function(req, res) {
  let cityID = req.params.city;
  res.locals.page_type = cityID;

  knex('plans').where('city', cityID).orderBy('upvote', 'DESC').then((plans) => {
    res.render('pages/plans', {
      plans: plans,
    });
  });
});



//handles adding a new plan with a new place
router.post('/new', (req, res, next) => {

  if (res.locals.loggedIn) {

    let newPlan = {
      user_id:res.locals.user.id,
      name: req.body.place_name
    };
    let newPlace = {
      name: req.body.plan_name,
      address: req.body.plan_name,
      city: req.body.plan_name,
      state: req.body.plan_name,
      zipcode: req.body.plan_name,

    };
    Plans.insert(newPlan)
      .then((plan) => {
        newPlace.plan_id = plan.id;
        Places.insert(newPlace)
          .then((place) => {
            res.redirect('/users/' + res.locals.user.id + '/plans/' + plan.id);
          });
      });

  } else {
    res.sendStatus(503);
  }

});

router.get('/:plan_id', function(req, res, next) {
  let plan_id = req.params.plan_id;

  res.locals.is_editable = false;

  Promise.all([
    Plans.by_id(plan_id),
    Places.listWithPlanID(plan_id)
  ]).then((result)=>{
    if (res.locals.loggedIn) {
      if (res.locals.user.id === result[0].user_id ) {
        res.locals.is_editable = true;
      }
    }
    // console.log(result[0].date);
    var y;
    if(result[0].date){
      var options = {year:'numeric',month:'numeric', day:'numeric' };

      result[0].date = result[0].date.toISOString().split('T')[0];

    }
    console.log(result[0].date);
    res.render('pages/plan-details',{plan:result[0],places:result[1]});
  });

});


router.get('/', function(req, res, next) {

  res.locals.page_type = 'All Plans';

  Plans.list().then((plans) => {
    res.render('pages/plans', {
      plans: plans
    });
  });
});


module.exports = router;
