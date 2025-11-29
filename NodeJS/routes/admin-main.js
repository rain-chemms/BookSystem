var express = require('express');
var router = express.Router();
var db = require('../sql.js');

router.get('/', function (req, res, next) {
    res.render('page-error');
});

//router.

router.get('/refresh', async (req, res) => {
    try {
        // 执行 SQL 查询（db 来自 sql.js）
        const [rows] = await db.promise().query('SELECT * FROM users');
        console.log(rows);
        if(rows!==null) res.json(rows); // 返回 JSON 数据
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });    
    }
});

//修改信息中的ID查询
router.post('/fix-search-id', async(req,res)=>{
  //获取用户输入
  try {
        var { idData } = req.body;
        const [rows] = await db.promise().query('SELECT UserID,UserName,UserPwd,UserPhoneNumber,UserEmail FROM users WHERE UserID = ' + idData);
        console.log(rows);
        if(rows!==null) res.json(rows); // 返回 JSON 数据
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message });    
    }
});


//修改信息中的Name查询
router.post('/fix-search-name',async(req,res)=>{
    //获取用户输入
  try {
        var { nameData } = req.body;
        const [rows] = await db.promise().query('SELECT UserID,UserName,UserPwd,UserPhoneNumber,UserEmail FROM users WHERE UserName = ' +'\''+ nameData+'\'');
        console.log(rows);
        if(rows!==null) res.json(rows); // 返回 JSON 数据
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message });    
    }
});

router.post('/fix-email',async(req,res)=>{
    try {
        var { userID,newEmail } = req.body;
        //执行修改语句
        await db.promise().query(
            'UPDATE users SET UserEmail = \'' + newEmail + '\' WHERE UserID =' + userID + ';'
        );
        res.json([{ message: '修改用户ID为:'+ userID +'的Email为:'+ newEmail}]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message });    
    }
});


router.post('/fix-phone',async(req,res)=>{
    try {
        var { userID,newPhone } = req.body;
        //执行修改语句
        await db.promise().query(
            'UPDATE users SET UserPhoneNumber = \'' + newPhone + '\' WHERE UserID =' + userID + ';'
        );
        res.json([{ message: '修改用户ID为:'+ userID +'的PhoneNumber为:'+ newPhone}]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message });    
    }
});

router.post('/fix-name',async(req,res)=>{
    try {
        var { userID,newName } = req.body;
        //执行修改语句
        await db.promise().query(
            'UPDATE users SET UserName = \'' + newName + '\' WHERE UserID =' + userID + ';'
        );
        res.json([{ message: '修改用户ID为:'+ userID +'的Name为:'+ newName}]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message });    
    }
});

router.post('/fix-pwd',async(req,res)=>{
    try {
        var { userID,newPwd } = req.body;
        //执行修改语句
        await db.promise().query(
            'UPDATE users SET UserPwd = \'' + newPwd + '\' WHERE UserID =' + userID + ';'
        );
        res.json([{ message: '修改用户ID为:'+ userID +'的UserPwd为:'+ newPwd}]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message });    
    }
});

router.post('/add-new-user',async(req,res)=>{
    try {
        var { userName,userPwd,userPhone,userEmail } = req.body;
        //执行修改语句
        await db.promise().query(
            'INSERT INTO users (UserID,UserName,UserPwd,UserPhoneNumber,UserEmail) VALUES (0,\''+userName+'\',\''+userPwd+'\',\''+userPhone+'\',\''+userEmail+'\');'
        );
        res.json([{ message: '添加的新用户Name为:'+ userName + '\nUserPwd为:'+ userPwd + '\nUserPhone为:'+ userPhone + '\nUserEmail为:'+ userEmail}]);
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message });    
    }
});

module.exports = router;