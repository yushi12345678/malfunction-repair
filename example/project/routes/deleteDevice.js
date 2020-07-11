var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let { id } = req.body;
    let query1 = "delete from management where `id`=?";
    connection.query(query1,[id],function(err,result1,fields){
      if (err) 
      {
        return;
      }
      res.json({data:'success', status:'200'});
    });
});
  
module.exports = router;