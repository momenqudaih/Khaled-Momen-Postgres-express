const { getAllUsres } = require('../database/queries/index')

const path = require('path')

exports.getUsers = (req, res) => {
    getAllUsres()
      .then(result => {
        res.json(result.rows);

      })
      .catch(err => res.status(500).send('Internal Server Error'));
  };


  