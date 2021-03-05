const connection = require("../db/connection");
const sql = require("../queries/sql");

module.exports = {
  createUser(username, password, adminLevel) {
    let db = connection.createConn();
    return new Promise((resolve, reject) => {
      db.query(
        sql.createUser,
        [username, password, adminLevel],
        (err, result) => {
          if (err) reject(new Error());
          else resolve(result);
        }
      );
      db.end();
    });
  },
  getUsers() {
    let db = connection.createConn();
    return new Promise((resolve, reject) => {
      db.query(sql.selectUsers, (err, result) => {
        if (err) reject(new Error());
        else resolve(result);
      });
      db.end();
    });
  },
  getUser(id) {
    let db = connection.createConn();
    return new Promise((resolve, reject) => {
      db.query(sql.selectUser, id, (err, result) => {
        if (err) reject(new Error());
        else resolve(result[0]);
      });
      db.end();
    });
  },
  updateUser(adminLevel, id) {
    let db = connection.createConn();
    return new Promise((resolve, reject) => {
      db.query(sql.updateUser, [adminLevel, id], (err, result) => {
        if (err) reject(new Error());
        else resolve(result);
      });
      db.end();
    });
  },
  deleteUser(id) {
    let db = connection.createConn();
    return new Promise((resolve, reject) => {
      db.query(sql.deleteUser, id, (err, result) => {
        if (err) reject(new Error());
        else resolve(result);
      });
      db.end();
    });
  },
};
