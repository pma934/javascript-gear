// 给定一个字符串找出其中无重复字符的最长子字符串的长度
function StrLen(str){
    var result = 1
    var norepeatStr = ''
    var len =str.length
    for(var i =0 ;i<len;i++){
        var specStr = str[i]
        var index = norepeatStr.indexOf(specStr)
        if(index === -1){
            norepeatStr = norepeatStr + specStr
            result = norepeatStr.length>result?norepeatStr.length:result
        }else{
            norepeatStr = norepeatStr.slice(index+1)+specStr
        }
    }
    return result
}

var p = StrLen('asdsaddsasasdfs')
