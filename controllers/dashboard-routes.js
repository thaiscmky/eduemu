 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under the New BSD License.
  * See the accompanying LICENSE.txt file for terms.
  */

const router = require("express").Router();
const { Request } = require("../models/");
const auth = require("../utils/auth");

router.get("/", auth, (req, res) => {
  Request.findAll({
      where: {
        userId: req.session.userId
      }
    })
      .then(data => {
        const requests = data.map((request) => request.get({ plain: true }));
        
        res.render("requests", {
          layout: "dashboard",
          requests
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
  });

  router.get("/new", auth, (req, res) => {
    res.render("new-request", {
      layout: "dashboard"
    });
  });
  
  router.get("/edit/:id", auth, (req, res) => {
    Request.findByPk(req.params.id)
      .then(data => {
        if (data) {
          const request = data.get({ plain: true });
          
          res.render("edit-request", {
            layout: "dashboard",
            request
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  
module.exports = router;
