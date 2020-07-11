var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//路由信息（接口地址）
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var codeRouter = require('./routes/getCode');
var forgetCodeRouter = require('./routes/forgetCode');
var replaceCode = require('./routes/replacePassword');
var borrowDevice = require('./routes/borrowDevice');
var myDevice = require('./routes/myDevice');
var deleteDevice = require('./routes/deleteDevice');
var applyFault = require('./routes/applyFault');
var myMessage = require('./routes/myMessage');
var editMessage = require('./routes/editMessage');
var upload = require('./routes/upload');
var myFault = require('./routes/myFault');
var faultStatus = require('./routes/faultStatus');
var comment = require('./routes/comment');
var sendSuggest = require('./routes/sendSuggest');
var getDevice = require('./routes/getDevice');
var deviceName = require('./routes/deviceName');
var myCheckFault = require('./routes/myCheckFault');
var getMyFaults = require('./routes/getMyFaults');
var postProgress = require('./routes/postProgress');
var analyze = require('./routes/analyze');
var getFaults = require('./routes/getFaults');
var getFaulters = require('./routes/getFaulters');
var setAssign = require('./routes/setAssign');
var getManages = require('./routes/getManages');
var updateStatus = require('./routes/updateStatus');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// 设置静态资源目录
app.use('/static/image',express.static('./public/images'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/getMailCode', codeRouter);
app.use('/forgetCode', forgetCodeRouter);
app.use('/replaceCode', replaceCode);
app.use('/borrowDevice', borrowDevice);
app.use('/myDevice', myDevice);
app.use('/deleteDevice', deleteDevice);
app.use('/applyFault', applyFault);
app.use('/myMessage', myMessage);
app.use('/editMessage', editMessage);
app.use('/upload', upload);
app.use('/myFault', myFault);
app.use('/faultStatus', faultStatus);
app.use('/comment', comment);
app.use('/sendSuggest', sendSuggest);
app.use('/getDevice', getDevice);
app.use('/deviceName', deviceName);
app.use('/myCheckFault', myCheckFault);
app.use('/getMyFaults', getMyFaults);
app.use('/postProgress', postProgress);
app.use('/analyze', analyze);
app.use('/getFaults', getFaults);
app.use('/getFaulters', getFaulters);
app.use('/setAssign', setAssign);
app.use('/getManages', getManages);
app.use('/updateStatus', updateStatus);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//app.listen(3000,function () {    ////监听3000端口
  //console.log('Server running at 3000 port');
//});
module.exports = app;
