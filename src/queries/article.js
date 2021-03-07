const connection = require("../db/connection");
const sql = require("../queries/sql");

module.exports = {
  createArticle(title, description, price, image) {
    let db = connection.createConn();
    return new Promise((resolve, reject) => {
      db.query(
        sql.createArticle,
        [title, description, price, image],
        (err, result) => {
          if (err) reject(new Error());
          else resolve(result);
        }
      );
      db.end();
    });
  },
  getArticles() {
    let db = connection.createConn();
    return new Promise((resolve, reject) => {
      db.query(sql.selectArticles, (err, result) => {
        if (err) reject(new Error());
        else resolve(result);
      });
      db.end();
    });
  },
  getArticle(id) {
    let db = connection.createConn();
    return new Promise((resolve, reject) => {
      db.query(sql.selectArticle, id, (err, result) => {
        if (err) reject(new Error());
        else resolve(result[0]);
      });
      db.end();
    });
  },
  updateArticle(title, description, price, id) {
    let db = connection.createConn();
    return new Promise((resolve, reject) => {
      db.query(
        sql.updateArticle,
        [title, description, price, id],
        (err, result) => {
          if (err) reject(new Error());
          else resolve(result);
        }
      );
      db.end();
    });
  },
  deleteArticle(id) {
    let db = connection.createConn();
    return new Promise((resolve, reject) => {
      db.query(sql.deleteArticle, id, (err, result) => {
        if (err) reject(new Error());
        else resolve(result);
      });
      db.end();
    });
  },
};
