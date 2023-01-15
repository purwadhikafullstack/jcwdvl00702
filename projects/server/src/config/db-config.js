const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });

module.exports = {
  env: {
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_CONNECTION,
  },
};
