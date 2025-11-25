var express = require('express');
var router = express.Router();
var db = require('../sql.js');

router.get('/', function (req, res, next) {
    res.render('page-error');
});

//router.

router.get('/refresh', async (req, res) => {
    try {
        // 执行 SQL 查询（ab 来自 sql.js）
        const [rows] = await db.promise().query('SELECT * FROM users');
        console.log(rows);
        if(rows!==null) res.json(rows); // 返回 JSON 数据
    } catch (err) {
        res.status(500).json({ error: err.message });    
        alert(error);
    }
});

module.exports = router;