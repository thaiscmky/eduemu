/*
 * Copyright (c) 2022, Thaís Cailet, @thaiscmky. All rights reserved.
 * Copyrights licensed under GPL-2.0.
 * See the accompanying LICENSE.txt file for terms.
 */
module.exports = {
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
  };