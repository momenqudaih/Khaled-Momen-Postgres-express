const connection = require("../config/connection");

const updateUserQuery = ({ id, name, email, img_url }) => {
  return connection.query(
    "UPDATE users SET name = $1, email = $2, img_url = $3 WHERE id = $4 RETURNING *",
    [name, email, img_url, id]
  );
};

module.exports = { updateUserQuery };
