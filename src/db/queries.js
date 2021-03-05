const connection = require("./connection")
const sql = require("./sql");

module.exports = {
  create(username, password, adminLevel) {
    let db = connection.createConn()
    return new Promise((resolve, reject) => {
      db.query(sql.create, [username, password, adminLevel], (err, result) => {
        if (err) reject(new Error());
        else resolve(result);
      });
      db.end()
    });
  },
  getAll() {
    let db = connection.createConn()
    return new Promise((resolve, reject) => {
      db.query(sql.selectAll, (err, result) => {
        if (err) reject(new Error());
        else resolve(result);
      });
      db.end()
    });
  },
  getOne(id) {
    let db = connection.createConn()
    return new Promise((resolve, reject) => {
      db.query(sql.selectOne, id, (err, result) => {
        if (err) reject(new Error());
        else resolve(result[0]);
      });
      db.end()
    });
  },
  update(adminLevel, id) {
    let db = connection.createConn()
    return new Promise((resolve, reject) => {
      db.query(sql.update, [adminLevel, id], (err, result) => {
        if (err) reject(new Error());
        else resolve(result);
      });
      db.end()
    });
  },
  delete(id) {
    let db = connection.createConn()
    return new Promise((resolve, reject) => {
      db.query(sql.delete, id, (err, result) => {
        if (err) reject(new Error());
        else resolve(result);
      });
      db.end()
    });
  },
};
