var express = require('express');
var router = express.Router();
var db =  require('../sql.js');

var adminName=''; //定义全局变量存储管理员名称
var adminPwd='';  //定义全局变量存储管理员密码

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin',{title:'BKSY后台管理系统登录'});
});

router.post('/admin-main', function(req, res, next) {
  //获取用户输入
  var val = req.body;
  adminName = val.adminName;
  adminPwd = val.adminPwd;
  //console.log(adminName,adminPwd);检测输入
  //查询数据库
  db.query("select * from adminster where AdminsterName=? and AdminsterPwd=?",[adminName,adminPwd],function(err,data){
    if(err){
      throw err;
    }
    else if( data.length>0 ){
      res.render('admin-main');//跳转到主页面
    }
    else{
      //res.write('<head><meta charset="utf-8"/></head>');
      //res.end('登陆失败,用户名或密码错误');
      res.render("page-error");
      res.end();
    }
  });
});
module.exports = router;