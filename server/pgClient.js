const { Client } = require('pg');

const pgClient  = new Client({
    host: 'localhost',
    port: 5432,
    database: 'LMS',
    user: 'admin',
    password: 'root'
});

pgClient.connect();

module.exports = pgClient;