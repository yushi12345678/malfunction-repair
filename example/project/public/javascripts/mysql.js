var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'1998',//修改为自己的密码
    database:'graduation'//修改为自己的数据库
  })
connection.connect();
module.exports = connection;