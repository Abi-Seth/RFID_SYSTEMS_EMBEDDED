const { config } = require('dotenv');

config()

exports.DB = process.env.APP_DB;
exports.APP_DOMAIN = process.env.APP_DOMAIN;