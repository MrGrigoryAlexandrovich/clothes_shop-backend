module.exports = {
  create: "INSERT INTO users (username,password,adminlevel) VALUES(?,?,?)",
  selectAll: "SELECT * FROM users",
  selectOne:"SELECT * FROM users WHERE id=?",
  update: "UPDATE users SET adminlevel=? WHERE id=?",
  delete: "DELETE FROM users WHERE id = ?",
};
