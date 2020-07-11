var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');



router.post('/', (req, res) => {
    let data = req.body;
    console.log(data);
    let query = "insert into fault(`name`,`desc`,department,location,tel,`time`,user_id, device_id) values(?,?,?,?,?,?,?,?)";
    connection.query(query,[data.name, data.desc,data.department,data.location,data.tel,data.time,data.user_id, data.device_id],function(err,result1,fields){
      res.json({data:"success", status:200});
    });
});
  
module.exports = router;