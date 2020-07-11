var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let {id} = req.body;
    let query1 = " select `fault_id` from fault_management where status!=3 and status!=2 and keeper_id=?";
    // let query2 = " select * from fault where  id=?"
    connection.query(query1,[id],async function(err,result1,fields){
        // let arr = [];
        // for (let i=0; i<result1.length;i++){
        //     connection.query(query2,[result1[i].fault_id], await function(err,result2,fields){
        //         arr.push(result2);
        //         if (err) throw err;
        //     });
        // }
        res.json({msg:'成功',data:result1, status:200});

    });
});
  
module.exports = router;
