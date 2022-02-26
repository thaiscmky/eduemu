 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under the New BSD License.
  * See the accompanying LICENSE.txt file for terms.
  */

const router = require('express').Router();

const users = require('./user-routes.js');
const requests = require('./request-routes');
const comments = require('./comment-routes');

router.use('/user', users);
router.use('/request', requests);
router.use('/comment', comments);

module.exports = router;