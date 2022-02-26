/*
 * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
 * Copyrights licensed under GPL-2.0.
 * See the accompanying LICENSE.txt file for terms.
 */

const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;
