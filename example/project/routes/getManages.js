var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    // let data= req.body;
    let query1 = "select `user`.`name` as username,`device`.`name`,management.use,management.lend_time from `user`,management,device where `user`.`id`=management.use_id and device.id=management.device_id";
    connection.query(query1,[],function(err,result1,fields){
        console.log(result1);
      res.json({data:result1, status:200, mag:'success'});
    });
});
  
module.exports = router;
