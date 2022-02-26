 /**
  * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
  * Copyrights licensed under GPL-2.0.
  * See the accompanying LICENSE.txt file for terms.
  */

const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(login) {
    return bcrypt.compareSync(login, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^(?=.{8,35}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/
      }
    }
  },
  {
    hooks: {
      async beforeCreate(data) {
        data.password = await bcrypt.hash(data.password, 10);
        return data;
      },
      async beforeUpdate(data) {
        data.password = await bcrypt.hash(data.password, 10);
        return data;
      }
    },
    sequelize
  }
);

module.exports = User;
