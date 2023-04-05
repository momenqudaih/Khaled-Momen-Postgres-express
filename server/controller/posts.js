const { getAllPosts } = require('../database/queries/getAllPosts')

exports.getPosts = (re,res) => {
    getAllPosts()
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).send('Internal Server Error'))
}