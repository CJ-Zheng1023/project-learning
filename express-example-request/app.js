//引入express模块
var express = require('express');
var app = express();

//引入session中间件
var session = require('express-session');
//引入body-parser模块，并设置中间件，该中间件必须在所有中间件和路由之前引入
//作用：处理post请求参数
app.use(require('body-parser')());

//session配置
app.use(session({
    secret: '123',
    cookie: {maxAge: 3600000},
    rolling: true,
    resave: true,
    saveUninitialized: true
}));
//配置静态资源
app.use(express.static(__dirname+'/static'));

//req.params  例子
app.get('/param/:id', function(req, res){
    console.log(req.params.id)
    res.send("param:"+req.params.id);
})
//req.query  例子
app.get('/query', function(req, res){
    console.log(req.query.id);
    res.send("query:"+req.query.id);
})
//req.body  例子
app.post('/body', function(req, res){
    console.log(req.body.userName);
    res.send("body:"+req.body.userName);
})
//req.session 例子
app.get('/session', function(req, res){
    req.session.name = "zzzzz"
    res.send("session:"+req.session.name);
})

//配置服务器监听，端口为3000
app.listen(3000, function(){
    console.log('server start');
});