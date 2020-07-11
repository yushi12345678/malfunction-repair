const nodemailer  = require("nodemailer");
let worth=true;
module.exports = function email(receivers, title, content){
    const smtpTransport = nodemailer.createTransport({
        service: '163',
        auth: {
            user: 'dinglibo123321@163.com',
            pass: 'dlb123321'    //注：此处为授权码，并非邮箱密码
        }
      });
    smtpTransport.sendMail({
        from    : 'dinglibo123321@163.com',//发件人邮箱
        to      : receivers,//收件人邮箱，多个邮箱地址间用','隔开
        subject : title,//邮件主题
        text:   content//text和html两者只支持一种
    }, function(err2, res2) {
      if (err2){
          worth=false;
      }
      else {
        worth=true;
      }
    });
    return true;
}