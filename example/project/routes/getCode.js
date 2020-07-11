let express = require('express');
let router = express.Router();
// const nodemailer  = require("nodemailer");
let connection = require('./../public/javascripts/mysql');
let email = require('./../public/javascripts/sendEmail');




router.post('/', (req, res) => {
    let { content,title,receivers} = req.body;
    let query = "select password from user where email=?";
    // const smtpTransport = nodemailer.createTransport({
    //   service: '163',
    //   auth: {
    //       user: 'dinglibo123321@163.com',
    //       pass: 'dlb123321'    //注：此处为授权码，并非邮箱密码
    //   }
    // });
    connection.query(query,[receivers],function(err,result,fields){
      if (err) throw err;
      if(result.length === 0){
      //   smtpTransport.sendMail({
      //     from    : 'dinglibo123321@163.com',//发件人邮箱
      //     to      : receivers,//收件人邮箱，多个邮箱地址间用','隔开
      //     subject : title,//邮件主题
      //     text:   content//text和html两者只支持一种
      // }, function(err2, res2) {
      //   console.log(err2);
      //   if (err2){
      //     res.json({data:"错误", status:400});
      //   }
      //   else {
      //     res.json({data:"成功", status:200});
      //   }
      // });
        let temp = email(receivers,content,title);
        if (temp){
          res.json({data:"成功", status:200});
          return;
        }
        res.json({data:"错误", status:400});
        return;
      }
      res.json({data:"用户已存在", status:401});
  })
});
  
module.exports = router;

  