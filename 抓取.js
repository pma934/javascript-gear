var http = require("http");
var fs = require("fs");
var cheerio = require("cheerio");
var url = "http://www.ivsky.com/";


function download(url, callback) {
    http.get(url, function (res) {
        var data = "";
        res.on("data", function (chunk) {
            data += chunk;
        });
        res.on("end", function () {
            callback(data)
        })
    }).on("error", function (err) {
        console.log(err)
    })
}

var CallBack = function (data) {
    if (data) {
        var $ = cheerio.load(data);
        $("img").each(function (i, elem) {
            var imgSrc = $(this).attr("src");
            // console.log(imgSrc)
            http.get("http:"+imgSrc, function (res) {
                var imgData = "";
                res.setEncoding("binary");
                res.on("data", function (chunk) {
                    imgData += chunk;
                });
                res.on("end", function () {
                    var imgPath = "/" + i + "." + imgSrc.split(".").pop();
                    fs.writeFile(__dirname + "/imgs" + imgPath, imgData, "binary", function (err) {
                        if (err != null)
                            console.log(err);
                    })
                })

            })
        })
    }
}

var getImg = x => download(x, CallBack);

getImg(url)

module.exports = getImg;