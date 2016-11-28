var express = require('express');
var app = express();
var router = express.Router();

//中间件，只适用于student业务模块
router.use(function(req, res, next){
  console.log('student middleware');
    next();
})
//挂载到student路径的路由配置
router.get('/show', function(req, res, next){
    res.send("show student");
});

module.exports = router;