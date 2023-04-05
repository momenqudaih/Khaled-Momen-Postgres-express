const { getAllPosts } = require('../database/queries/index')

exports.getPosts = (req,res) => {
    getAllPosts()
    .then(result => res.json(result.rows))
    .catch(err => res.status(500).send('Internal Server Error'))
}
