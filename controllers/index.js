 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under GPL-2.0.
  * See the accompanying LICENSE.txt file for terms.
  */

const router = require('express').Router();

const api = require('./api/');
const html = require('./html-routes.js');
const dashboard = require('./dashboard-routes.js');

router.use('/', html);
router.use('/dashboard', dashboard);
router.use('/api', api);

module.exports = router;
