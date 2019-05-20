require("dotenv").config()


var mysql = require("mysql");

var connection;

  connection = mysql.createConnection({
    host: process.env.HOST,
    user: "root",
    password:process.env.PASS,
    database: "burgers_db"
  })



connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;