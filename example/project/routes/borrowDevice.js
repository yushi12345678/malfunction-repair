var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let { email,use,name,time} = req.body;
    let query1 = " select `id`,deparment,position from user where email=?";
    let query2 = " select `id` from device where name=?";
    let query3 = " insert into management(use_id,device_id,`use`,`status`,lend_time) values(?,?,?,?,?)";
    connection.query(query1,[email],function(err,result1,fields){
      if (result1.length === 0) 
      {
        res.json({data:"邮箱不存在", status:400});
        return;
      }
      else {
      connection.query(query2,[name],function(err1,result2,fields){
        if (result2.length === 0) {
          res.json({data:"设备不存在", status:401});
          return;
        }
        else{
        connection.query(query3,[result1[0].id,result2[0].id,use,1,time],function(err2,result,fields){
            // if (err2) throw err2;
            res.json({data:"申请成功", status:200});
        });
    }
      });
    }
    });
});
  
module.exports = router;