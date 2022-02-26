 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under GPL-2.0.
  * See the accompanying LICENSE.txt file for terms.
  */

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
