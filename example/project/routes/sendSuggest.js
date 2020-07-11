var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let data = req.body;
    let query = "insert into suggest(`type`,`desc`) values(?,?)";
    connection.query(query,[data.type, data.desc],function(err,result1,fields){
      res.json({data:"success", status:200});
    });
});
  
module.exports = router;