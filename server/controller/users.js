const { getAllUsers } = require('../database/queries/index')

exports.getUsers = (req, res) => {
    getAllUsers()
      .then(result => {
        res.json(result.rows);
      })
      .catch(err => res.status(500).send('Internal Server Error'));
  };


  