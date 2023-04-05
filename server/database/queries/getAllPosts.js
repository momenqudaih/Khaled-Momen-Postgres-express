const { pool } = require('../config/connection')

const getAllPosts = ()=>{
    return pool.query('SELECT * FROM posts')
}

module.exports = { 
    getAllPosts
}