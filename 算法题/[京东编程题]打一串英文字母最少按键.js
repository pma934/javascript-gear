// 一串英文字符串，求打出来的最少按键次数，(shift + 字母键)为两次，大小写切换算一次
// 起始为小写状态

const III = [
    'AaaAAA'
]
const PPP = [
    '8'
]
//----------------输入输出-------------------
let III_INDEX = 0
let PPP_INDEX = 0

function readline() {
    return III[III_INDEX++]
}

function print(x) {
    x = x.toString()
    if (x === PPP[PPP_INDEX]) {
        console.log('ok')
    } else {
        console.log('error')
    }
    PPP_INDEX++
}
//----------------程序部分-------------------

//方法一

var str = readline()

str = str.replace(/[a-z]/g, 0).replace(/[A-Z]/g, 1)
//把小写中间夹着的单个大写换成两个小写，或者把大写中间夹着的单个小写换成两个大写
str = str.replace(/([1]+)([0]{1})([1]+)/g, function ($0, $1, $2, $3) {
    return $1 + '11' + $3
})

var res = 0
var last = str[0]
var len = 1

for (let i = 1; i < str.length; i++) {
    let now = str[i]
    if (now === last) {
        len++
    } else {
        last = now
        if (len === 1) {
            res += 1
        } else {
            res += (len + 1)
        }
        len = 1
    }
    if (i === str.length - 1) {
        res += (len + 1)
    }
}

print(res)


//----------------程序部分-------------------

//方法二

//考虑单个字母为 shift+字母  ，即1+1
//多个字母为 caps + 字母s + caps  ，即 n+2
//然后去掉切换尾 -1 ，即 1 和 n+1
//连着的长度为1的地方，需要特殊处理

var str = readline()

str = str.replace(/[a-z]/g, 0).replace(/[A-Z]/g, 1)

var res = str[0] ? 0 : -1
var last = str[0]
var len = 1
var lastLenIsone = false

for (let i = 1; i < str.length; i++) {
    let now = str[i]
    if (now === last) {
        len++
    } else {
        last = now
        if (len === 1) {
            res += 1
            if (lastLenIsone) {
                res += 1
                lastLenIsone = false
            } else {
                lastLenIsone = true
            }
        } else {
            res += (len + 1)
            lastLenIsone = false
        }
        len = 1
    }
    if (i === str.length - 1) {
        res += (len + 1)
    }
}

print(res)