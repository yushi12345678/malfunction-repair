var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let {user_id} = req.body;
    let query1 = " select `name` from management  join device on management.device_id=device.id where management.use_id=?";
    let query2 = " select management.id, deparment, position,`use`,`status`, lend_time from management join `user` on management.use_id=`user`.id where management.use_id=?";
    connection.query(query1,[user_id],function(err,result1,fields){
      if (err) throw err;
      connection.query(query2,[user_id],function(err,result2,fields){
        if (err) throw err;
        let array=[];
        for (i=0,j=0;i<result1.length,j<result2.length;i++,j++){
            array.push({
                id:result2[j].id,
                name:result1[i].name,
                department:result2[j].deparment,
                position:result2[j].position,
                use:result2[j].use,
                time:result2[j].lend_time,
                status:result2[j].status,
            })
        }
        res.json({msg:'成功',data:array, status:200});
      });
    });
});
  
module.exports = router;
