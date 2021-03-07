module.exports = {
  //User SQL
  createUser: "INSERT INTO users (username,password,adminlevel) VALUES(?,?,?)",
  selectUsers: "SELECT * FROM users",
  selectUserById: "SELECT * FROM users WHERE id=?",
  selectUserByName: "SELECT * FROM users WHERE username=?",
  updateUser: "UPDATE users SET adminlevel=? WHERE id=?",
  deleteUser: "DELETE FROM users WHERE id = ?",
  //article SQL
  createArticle:
    "INSERT INTO articles (title,description,price,image) VALUES(?,?,?,?)",
  selectArticles: "SELECT * FROM articles",
  selectArticle: "SELECT * FROM articles WHERE id=?",
  updateArticle: "UPDATE articles SET title=?,description=?,price=? WHERE id=?",
  deleteArticle: "DELETE FROM articles WHERE id = ?",
};
