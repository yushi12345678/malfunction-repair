var express = require('express');
var router = express.Router();
var connection = require('./../public/javascripts/mysql');


router.post('/',function(req,res){
    res.json({data:"注册成功", status:200});
    var name = req.body.username;
    var pwd = req.body.password;
    var user = [name,pwd];
    var query = 'insert into user(email,password) values(?,?)';
    connection.query(query,user,function(err,result){
    if(err) throw err;
    });
});
module.exports = router;
