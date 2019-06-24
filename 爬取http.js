//加载http模块
var http = require('http');
var https = require('https');

//目标网站，嘿嘿，这个网站有很多实习职位
var pageUrl = 'https://codepen.io/popular/feed';

https.get(pageUrl, function(res) {
    var html = '';
    res.on('data', function(data) {
        html += data;
    });
    res.on('end', function() {
        console.log(html);
    });
});