const pgp = require('pg-promise')();

const conn = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.USER,
    password: process.env.PASS
};

const db = pgp(conn);

module.exports = db;