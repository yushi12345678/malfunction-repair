var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let data = req.body;
    let query = "insert into fault_management(keeper_id,`name`,`fault_id`,`uuser_id`,`status`) values(?,?,?,?,?)";
    connection.query(query,[data.keeper_id,data.name, data.id,data.userid,data.status],function(err,result1,fields){
      res.json({data:"success", status:200});
    });
});
  
module.exports = router;