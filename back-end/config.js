const  mysql = require('mysql');
const  connection = mysql.createConnection({
  host :  'localhost', // address of the server
  user :  'dinulocal', // username
  password :  '1Didididi!',
  database :  'calendar',
});
module.exports = connection;

