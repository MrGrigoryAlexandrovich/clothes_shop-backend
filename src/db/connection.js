//loadig mysql and config
const mysql = require("mysql");
const config = require("../../config");
module.exports = {
  createConn() {
    //Create connection
    const db = mysql.createConnection({
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.database,
    });
    // Connect do db
    db.connect((err) => {
      if (err) throw err;
    });
    return db;
  },
};

//              sudo /opt/lampp/manager-linux-x64.run
