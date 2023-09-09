/* eslint-disable no-undef */
require('dotenv').config();

module.exports = {
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 3001,
  MONGO_CRENDENTIALS: process.env.MONGO_DB_URI,
  MONGO_CRENDENTIALS_TEST: process.env.MONGO_DB_URI_TEST,
  TOKEN_SECRET: process.env.TOKEN_SECRET,
};