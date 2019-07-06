// 链接：https://www.nowcoder.com/questionTerminal/504ad6420b314e5bb614e1684ad46d4d
// 来源：牛客网

// 一个合法的括号匹配序列被定义为:
// 1. 空串""是合法的括号序列
// 2. 如果"X"和"Y"是合法的序列,那么"XY"也是一个合法的括号序列
// 3. 如果"X"是一个合法的序列,那么"(X)"也是一个合法的括号序列
// 4. 每个合法的括号序列都可以由上面的规则生成
// 例如"", "()", "()()()", "(()())", "(((()))"都是合法的。
// 从一个字符串S中移除零个或者多个字符得到的序列称为S的子序列。
// 例如"abcde"的子序列有"abe","","abcde"等。
// 定义LCS(S,T)为字符串S和字符串T最长公共子序列的长度,即一个最长的序列W既是S的子序列也是T的子序列的长度。
// 小易给出一个合法的括号匹配序列s,小易希望你能找出具有以下特征的括号序列t:
// 1、t跟s不同,但是长度相同
// 2、t也是一个合法的括号匹配序列
// 3、LCS(s, t)是满足上述两个条件的t中最大的
// 因为这样的t可能存在多个,小易需要你计算出满足条件的t有多少个。

// 如样例所示: s = "(())()",跟字符串s长度相同的合法括号匹配序列有:
// "()(())", "((()))", "()()()", "(()())",其中LCS( "(())()", "()(())" )为4,其他三个都为5,所以输出3.


var input = "(())"//readline()
//判断合法
function isTrue(c){
    let n = 0
    for(let i=0,len=c.length;i<len;i++){
        n = c[i] ==="(" ? n+1:n-1
        if(n<0){
            return false
        }
    }
    return n?false:true
}

var set = new Set()
var len=input.length
for(let i=0;i<len;i++){
    let str = input.split('');
    let char = str.splice(i,1)[0]
    for(let j=0;j<len-1;j++){
        let newstr = [...str]
        newstr.splice(j,0,char)
        isTrue(newstr)?set.add(newstr.join('')):null  
    }
}
console.log(set.size-1)
