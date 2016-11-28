//引入express模块
var express = require('express');
var app = express();
var student = require('./routes/student');

//创建路由
app.get('/', function(req, res){
    res.send('hello world');
})
app.get('/teacher', function(req, res){
    res.send('teacher');
})
app.use('/student', student);

//配置服务器监听，端口为3000
app.listen(3000, function(){
    console.log('server start');
});