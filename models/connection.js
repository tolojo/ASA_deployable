var pg = require('pg');

const connectionString = "postgres://czxadwdxwahaiu:e8642a00d8abbb16cb564d4728d8c8625ba76670b64b2e8a58813b8d4696b3c9@ec2-99-80-170-190.eu-west-1.compute.amazonaws.com:5432/d8qdfgis64fvaq"

const Pool = pg.Pool
const pool = new Pool({
    connectionString,
    max: 20,
    ssl: {
        require: true, 
        rejectUnauthorized: false
    }
    
})

module.exports = pool;