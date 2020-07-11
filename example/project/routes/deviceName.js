var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let data= req.body;
    let query = "select `name` from device where `id`=?";
    connection.query(query,[data.id],function(err,result,fields){
      res.json({data:result, status:200, mag:'success'});
    });
});
  
module.exports = router;