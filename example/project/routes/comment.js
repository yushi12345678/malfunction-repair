var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let data = req.body;
    let query1 = "select `keeper_id` from fault_management where `fault_id`=?"
    let query2 = "insert into goodwords(`star`,`keeper_id`,comment_text) values(?,?,?)";
    connection.query(query1,[data.id],function(err,result1,fields){
        connection.query(query2,[data.star, result1[0].keeper_id, data.comment],function(err,result2,fields){
            res.json({status:200, mag:'success'});
        });
    });
});
  
module.exports = router;