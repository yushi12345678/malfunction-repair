var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let data = req.body;
    let query1 = "select count(*) count from `fault`";
    let query = "select device_id,count(*) count from `fault` group by device_id order by count(*) desc";
    connection.query(query1,[],function(err,result2,fields){
        connection.query(query,[],function(err,result1,fields){
            console.log(result2,result1)
            let arr = [];
            let arr2 = []; 
            arr.push({
                type:result1[0].device_id,
                value:Number((result1[0].count*100/result2[0].count).toFixed(1))
            })
            arr.push({
                type:0,
                value:100 - (result1[0].count*100/result2[0].count).toFixed(1) 
            })
            for (let i = 1;i<result1.length;i++){
                arr2.push({
                    type:result1[i].device_id,
                    value:Number((result1[i].count*100/result2[0].count).toFixed(1))
                })
            }
            
            res.json({data:arr, status:200,data2:arr2});
        });
    });
    
});
  
module.exports = router;