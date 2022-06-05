var pg = require('pg');

const connectionString = "postgres://mevveufraiyeqv:5f74ed3b02e48baca153249419fbbcc987e4e9362e2f04e31d29f5aad49754b4@ec2-34-248-169-69.eu-west-1.compute.amazonaws.com:5432/d6ulbi3taocg6n"

const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    max: 20,
    ssl: true
    
})

module.exports = pool;