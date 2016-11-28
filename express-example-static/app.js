//引入express模块
var express = require('express');
var app = express();


//__dirname为当前文件完整绝对路径
//对外开放static目录
app.use(express.static(__dirname + '/static'));

//配置服务器监听，端口为3000
app.listen(3000, function(){
    console.log('server start');
});