var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port     : 3307
});

/* GET home page. */
router.post('/', function(req, res, next) {
  var s=req.body.data;
  connection.query(`SELECT * FROM baobei.list WHERE name LIKE '%${s}%'`,function(err,rows,fields){
    res.header('Access-Control-Allow-Origin','*');
    res.send(rows);
  })
})
module.exports = router;