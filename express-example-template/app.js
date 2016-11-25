//引入express模块
var express = require('express');
var app = express();


//设置handlebars视图引擎，并设置main.handlebars为默认模板
var handlebars =require('express3-handlebars').create({
    defaultLayout:'main',
    helpers: {
        //配置段落函数
        section: function(name, options){
            if(!this._sections) this._sections = {};
            this._sections[name] = options.fn(this);
            return null;
        }
    }
});
//配置静态资源
app.use(express.static(__dirname+'/components'));
//设置handlebars为默认模板引擎
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//创建路由
app.get('/', function(req, res ,next){
    res.render('index', {
        studentList: [
            {
                name: 'zz',
                age: 11
            },
            {
                name: 'cc',
                age: 22
            }
        ],
        user: {
            school: 'school',
            teacher: 'teacher'
        }
    });
})

app.get('/partialExample', function(req, res, next){
    res.render('partials-example');
})
app.get('/sectionExample', function(req, res, next){
    res.render('section-example');
})


//配置服务器监听，端口为3000
app.listen(3000, function(){
    console.log('server start');
});