const router = require('express').Router();
const { User } = require('../../models');

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

router.post('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(data => {
    const generic_msg = "Incorrect username or password.";
    if (!data) {
      res.status(400).json({ message: generic_msg});
      return;
    }

    const validPassword = data.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: generic_msg });
      return;
    }

    req.session.save(() => {
      req.session.userId = data.id;
      req.session.username = data.username;
      req.session.loggedIn = true;

      res.json({ user: data, message: 'Log-in successfull' });
    });
  });
});
 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under the New BSD License.
  * See the accompanying LICENSE.txt file for terms.
  */
 
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res
        .status(204)
        .json({ message: 'Log-out successfull' })
        .end();
    });
  } else {
    res.status(400).end();
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
