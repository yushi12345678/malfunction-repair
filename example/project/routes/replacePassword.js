var express = require('express');
var router = express.Router();
var connection = require('./../public/javascripts/mysql');


router.post('/',function(req,res){
    var name = req.body.username;
    var pwd = req.body.password;
    var user = [pwd,name];
    var query = 'update user set password=? where email=?;';
    connection.query(query,user,function(err,result){
    if(err) throw err;
    res.json({data:"更新成功", status:200});
    });
});
module.exports = router;
