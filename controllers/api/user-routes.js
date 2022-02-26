/**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under GPL-2.0.
  * See the accompanying LICENSE.txt file for terms.
  */

const router = require('express').Router();
const { User } = require('../../models');
const passport = require('../../config/passport');

router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    password: req.body.password
  })
    .then(data => {
      req.session.save(() => {
        req.session.userId = data.id;
        req.session.username = data.username;
        req.session.loggedIn = true;

        res.json(data);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// app.post('/login',
// passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
// function(req, res) {
  
//   res.redirect('/~' + req.user.username);
// });


router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureMessage: true, session: false }), (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(data => {
    req.session.save(() => {
      req.session.userId = data.id;
      req.session.username = data.username;
      req.session.loggedIn = true;

      res.json({ user: data, message: 'Log-in successfull' });
    });
  });
});
 

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.redirect('/');
    });
  } else {
    res.redirect('/');
  }
});

router.delete('/user/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    if (!data) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json(data);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
