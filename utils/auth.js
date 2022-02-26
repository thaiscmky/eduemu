/*
 * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
 * Copyrights licensed under GPL-2.0.
 * See the accompanying LICENSE.txt file for terms.
 */

const authenticated = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = authenticated;
