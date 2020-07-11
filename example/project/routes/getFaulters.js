var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let query1 = " select * from user where  type=?"
    connection.query(query1,[1],async function(err,result1,fields){
        res.json({msg:'成功',data:result1, status:200});
    });
});
  
module.exports = router;
