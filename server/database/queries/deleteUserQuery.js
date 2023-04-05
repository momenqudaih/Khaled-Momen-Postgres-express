const { pool } = require("../config/connection");

const deleteUserQuery = (id) => {
  return pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);
};

module.exports = { deleteUserQuery };
