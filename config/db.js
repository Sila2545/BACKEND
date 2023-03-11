const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./database/user.sqlite");

db.run("CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARYKEY , name TEXT , email TEXT , password TEXT , status INTEGER )"); //กำหนด Type ของ มัน ไว้้

module.exports = db;