const {Pool} = require('pg')

const pool = new Pool({
    connectionString : process.env.db_string,
    ssl: {
        rejectUnauthorized: false // Required for Neon
    }
})

module.exports = pool;