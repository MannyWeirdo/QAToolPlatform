var express = require('express');
var router = express.Router();


//var checkNotLogin = require('../middlewares/check').checkNotLogin;

// GET /signin 登录页
router.get('/', function(req, res, next) {
    //res.send(req.flash());
    res.render('homePage');
});

// POST /signin 用户登录
router.post('/', function(req, res, next) {});

module.exports = router;