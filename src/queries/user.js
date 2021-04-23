const connection = require("../db/connection");
const sql = require("../queries/sql");

module.exports = {
    createUser(username, password, adminLevel) {
        let db = connection.createConn();
        return new Promise((resolve, reject) => {
            db.query(sql.createUser, [
                username, password, adminLevel
            ], (err, result) => {
                if (err) 
                    reject(new Error());
                 else 
                    resolve(result);
                
            });
            db.end();
        });
    },
    login(username) {
        return new Promise((resolve, reject) => {
            const db = connection.createConn();
            db.query(sql.user, username, (err, result) => {
                if (err) 
                    reject(new Error());
                 else 
                    resolve(result);
                
            });
            db.end();
        });
    },
    getUsers() {
        let db = connection.createConn();
        return new Promise((resolve, reject) => {
            db.query(sql.selectUsers, (err, result) => {
                if (err) 
                    reject(new Error());
                 else 
                    resolve(result);
                
            });
            db.end();
        });
    },
    getUserById(id) {
        let db = connection.createConn();
        return new Promise((resolve, reject) => {
            db.query(sql.selectUserById, id, (err, result) => {
                if (err) 
                    reject(new Error());
                 else 
                    resolve(result[0]);
                
            });
            db.end();
        });
    },
    getUserByName(username) {
        let db = connection.createConn();
        return new Promise((resolve, reject) => {
            db.query(sql.selectUserByName, username, (err, result) => {
                if (err) 
                    reject(new Error());
                 else 
                    resolve(result[0]);
                
            });
            db.end();
        });
    },
    updateUser(adminLevel, id) {
        let db = connection.createConn();
        return new Promise((resolve, reject) => {
            db.query(sql.updateUser, [
                adminLevel, id
            ], (err, result) => {
                if (err) 
                    reject(new Error());
                 else 
                    resolve(result);
                
            });
            db.end();
        });
    },
    deleteUser(id) {
        let db = connection.createConn();
        return new Promise((resolve, reject) => {
            db.query(sql.deleteUser, id, (err, result) => {
                if (err) 
                    reject(new Error());
                 else 
                    resolve(result);
                
            });
            db.end();
        });
    }
};
