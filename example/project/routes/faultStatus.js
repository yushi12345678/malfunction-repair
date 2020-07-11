var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let data= req.body;
    let query = "select `status` from fault_management where `fault_id`=? and `uuser_id`=?";
    connection.query(query,[data.id, data.uid],function(err,result,fields){
      if (!result[0]){
        res.json({data:4, status:200, mag:'success'});
        return;
      }
      res.json({data:result, status:200, mag:'success'});
    });
});
  
module.exports = router;