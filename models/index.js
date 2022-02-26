 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under GPL-2.0.
  * See the accompanying LICENSE.txt file for terms.
  */

const User = require('./User');
const Request = require('./Request');
const Comment = require('./Comment');

Request.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Request.hasMany(Comment, {
  foreignKey: 'requestId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = { User, Comment, Request};