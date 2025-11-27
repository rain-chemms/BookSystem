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
router.post('/fix-id', async(req,res)=>{
  //获取用户输入
  try {
        var { idData } = req.body
        /*
        if (!idData) {
            idData = '1';
        }
        */
        const [rows] = await db.promise().query('SELECT UserName,UserPwd,UserPhoneNumber,UserEmail FROM users WHERE UserID = ' + idData);
        console.log(rows);
        if(rows!==null) res.json(rows); // 返回 JSON 数据
    } catch (err) {
        console.log(err);
        res.status(500).json({ err: err.message });    
    }
});


//修改信息中的Name查询
router.post('/fix-name',async(req,res)=>{
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
module.exports = router;