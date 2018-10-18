// 'use strict';
// var _ = require('underscore');
// var fs = require('fs');

// var timeleter = require('./定时器');
// var CP = require('./闭包');
// var All = require('./高阶函数');
// var gitImg = require('./抓取');
// var http = require('http');
// var url = require('url');

// //var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
// //console.log(sum);
// //timeleter(9);

// //console.log(CP);

// //timeleter(6);

// process.on('exit', function (code) {//结束时运行
//     console.log('程序结束');
// });

// var server = http.createServer(function (request, response) {
//     // 回调函数接收request和response对象,
//     // 获得HTTP请求的method和url:
//     console.log(request.method + ': ' + request.url);
//     // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     // 将HTTP响应的HTML内容写入response:
//     response.end('<h1>Hello world!</h1>');
// });

// // 让服务器监听8080端口:
// server.listen(8080);

// console.log('Server is running at http://127.0.0.1:8080/');

'use strict';
var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

var root = path.resolve(process.argv[2]||'.');

console.log('Static root dir: ' + root);

//获取本地存储文件的目录，默认就是当前目录

var server = http.createServer(function(request, response){
    var pathname = url.parse(request.url).pathname;
    //使用url.parse解析请求中的相对地址，比如其中pathname对应的就是相对地址
    var filepath = path.join(root, pathname);
    //root+pathname是绝对地址

    fs.stat(filepath, function(err, stats){
        // 创建读取文件状态的异步函数，读取结束后判断是否出错以及如何处理
        if (!err && stats.isFile()){
            // 如果未出错，那么反馈Http头部反馈200
            console.log('200 ' +request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
            // 同时将文件读取流与response接上，因此HTTP里的response也是一个流对象
        } else if(!err && stats.isDirectory()){
        // 一定需要!err，否则会是一个不完善的判断，会报错
            console.log('200 '+ request.url);
            response.writeHead(200);
            fs.createReadStream(path.join(filepath, 'index.html')).pipe(response); //其实，node.js肯定有函数读出来或者搜索一个dir下面的文件名称，不纠结了；之后补上。
        } else {
            console.log('404 ' + request.url);
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080');