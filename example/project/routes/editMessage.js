var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let data = req.body;
    let query = "update `user` set deparment=?,`name`=?, `position`=?, industry=?,sign=?,photo=? where id=?;";
    connection.query(query,[data.deparment, data.name, data.position, data.industry, data.sign, data.photo, data.id],function(err,result1,fields){
      res.json({data:"success", status:200});
    });
});
  
module.exports = router;