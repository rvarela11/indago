const express = require('express');
const router = express.Router();
const User = require('../modules/users');
const bcrypt = require('bcrypt-nodejs');

router.get('/:user_id/', function (req, res, next) {
  var user_id = req.params.user_id;
  User.all().where('id', user_id).first().then((user)=>{
    res.render('pages/user_edit', {user : user});
  });
});


  //use knex

  //get user information from the database

  //send user infromation to the render page
router.patch('/:user_id/', function (req, res, next) {
  console.log(req.body);
  var user_id = req.params.user_id;
  if (req.body.password.length === 0 ){
    User.update({ id: user_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email })
      .then(function(){
        //res.render('./pages/user_edit');
        res.redirect('/');
      });
  } else {
    req.body.password = bcrypt.hashSync(req.body.password);
    User.update(req.body).then(function(){

      res.redirect('/');
    });
  }
});

// bcrypt.hashSync('password');
  //knex

  //get updated information from req.body

  //update user information in the database

router.delete('/:user_id', (req, res, next) => {
  // get user id from params
  console.log('yooooooo');
  let user_id = req.params.user_id;
  // delete user based on user id, in DB
  User.all()
    .where({id:user_id})
    .del()
    .then(function(err){
      // if (err) {
      //   console.log('error on route',err);
      //   res.send(err);
      // }
      console.log('deleted', user_id);
      res.redirect('/users/login');
    });
});


module.exports = router;
