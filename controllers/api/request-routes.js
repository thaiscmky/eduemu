 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under GPL-2.0.
  * See the accompanying LICENSE.txt file for terms.
  */

const router = require("express").Router();
const { Request } = require("../../models/");
const auth = require("../../utils/auth");

router.post("/", auth, (req, res) => {
  const body = req.body;
  console.log(req.session.userId);
  Request.create({ ...body, userId: req.session.userId })
    .then(request => { res.json(request); })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.put("/:id", auth, (req, res) => {
  Request.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.delete("/:id", auth, (req, res) => {
  Request.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
