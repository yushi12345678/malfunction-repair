const express=require('express');
const router=express.Router();
//上传图片的模板
var multer=require('multer');
//生成的图片放入uploads文件夹下
// var upload=multer({dest:'uploads/'})
//图片上传必须用post方法
const path = require('path');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve('public/images/uploads'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
    });
  
  const upload = multer({storage: storage});
  
  router.post('/', upload.single('avatar'), function(req, res, next) {
  
    res.send({
      err: null,
      filePath: 'http://localhost:3000/static/image/uploads/' + path.basename(req.file.path)
    });
  });
  
module.exports=router;