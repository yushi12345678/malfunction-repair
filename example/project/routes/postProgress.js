var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let data = req.body;
    let query = "update `fault_management` set status=? where fault_id=?;";
    connection.query(query,[data.status, data.id],function(err,result1,fields){
      res.json({data:"success", status:200});
    });
});
  
module.exports = router;