require("dotenv").config()


var mysql = require("mysql");

if (process.env,JAWSDB_URL){
  var connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
  var connection;
  connection = mysql.createConnection({
    host: process.env.HOST,
    user: "root",
    password:process.env.PASS,
    database: "burgers_db"
  })}





connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;