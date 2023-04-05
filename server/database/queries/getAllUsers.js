const { pool } = require('../config/connection')

const getAllUsres = ()=>{
    return pool.query('SELECT * FROM users')
}

module.exports = getAllUsres