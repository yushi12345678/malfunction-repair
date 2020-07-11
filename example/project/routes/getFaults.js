var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let data= req.body;
    let query = "select `id`,`name`,`user_id`, `desc`,`tel`,`time` from fault where `id` not in(select `fault_id` from `fault_management`) order by `id`"; 
    connection.query(query,function(err,result,fields){
      res.json({data:result, status:200, mag:'success'});
    });
});
  
module.exports = router;