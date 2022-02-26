 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under GPL-2.0.
  * See the accompanying LICENSE.txt file for terms.
  */

const router = require("express").Router();
const { Request, Comment, User } = require("../models");

router.get("/", (req, res) => {
  Request.findAll({
    include: [User],
  })
  .then((data) => {
    const requests = data.map((request) => request.get({ plain: true }));
    res.render("requests", { requests, loggedIn: req.session.loggedIn ?? false });
  })
  .catch((err) => {
    res.status(500).json(err);
  });
});

router.get("/request/:id", (req, res) => {
  Request.findByPk(req.params.id, {
    include: [
      User,
      {
        model: Comment,
        include: [User],
      },
    ],
  })
  .then((data) => {
    if (data) {
      const request = data.get({ plain: true });

      res.render("request", { request });
    } else {
      res.status(404).end();
    }
  })
  .catch((err) => {
    res.status(500).json(err);
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
