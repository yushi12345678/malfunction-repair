var express = require('express');
var router = express.Router();
var connection = require('./../public/javascripts/mysql');

router.post('/',function(req,res){

    var name = req.body.username;
    var pwd = req.body.password;
    var query1 = "select `password`,`id`,`type` from `user` where `email`=?";
    connection.query(query1,[name],function(err,result,fields){
        if(result.length === 0){
            res.json({data:"用户名不存在", status:400});
            return;
        }
        if(result[0].password !==0 && result[0].password !== pwd){ 
            res.json({data:"密码错误", status:401});
            return;
        }
        res.json({msg:'登录成功',data:result[0], status:200});
    })
});

module.exports = router;