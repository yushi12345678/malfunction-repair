var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let data = req.body;
    console.log(data);
    let query = "update `fault_management` set status=? where fault_id=? and uuser_id=?;";
    connection.query(query,[3,data.fault_id, data.uuser_id],function(err,result1,fields){
      res.json({data:"success", status:200});
    });
});
  
module.exports = router;