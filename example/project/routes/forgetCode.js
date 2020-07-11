var express = require('express');
var router = express.Router();
let connection = require('./../public/javascripts/mysql');
let email = require('./../public/javascripts/sendEmail');


router.post('/', (req, res) => {
    let { content,title,receivers} = req.body;
    var query = "select password from user where email=?";
    
    // const smtpTransport = nodemailer.createTransport({
    //   service: '163',
    //   auth: {
    //       user: 'dinglibo123321@163.com',
    //       pass: 'dlb123321'    //注：此处为授权码，并非邮箱密码
    //   }
    // });
    connection.query(query,[receivers],function(err,result,fields){
      if (err) throw err;
      if(result.length !== 0){
        let temp = email(receivers,content,title);
        if (temp){
            res.json({data:"成功", status:200});
            return;
          }
          res.json({data:"错误", status:400});
          return;
      }
      res.json({data:"用户不存在", status:401});
  })
});
  
module.exports = router;



  