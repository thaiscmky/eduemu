 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under the New BSD License.
  * See the accompanying LICENSE.txt file for terms.
  */
 
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Request extends Model {}

Request.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true
      },
      allowNull: false
    }
  },
  {
    sequelize
  }
);

module.exports = Request;
