var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', async (req, res) => {
    let data= req.body;
    let query = "select * from fault where `user_id`=?";
    await connection.query(query,[data.id],function(err,result,fields){
      res.json({data:result, status:200, mag:'success'});
    });
});
  
module.exports = router;