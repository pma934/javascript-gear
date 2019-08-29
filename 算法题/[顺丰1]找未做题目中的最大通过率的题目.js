//找未做题目中的最大通过率的题目
const III = [
    '6',
    'ADEGHM',
    '58 42 98 84 84 40 75 97 98 7 8 40 54'
]
const PPP = [
    'C'
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

var len = readline()
var signs = readline().split('')
var pass = readline().split(' ').map(x => +x)

var p = pass.map((x, i) => {
    let sign = String.fromCharCode(i + 65)
    return signs.indexOf(sign) === -1 ? x : 0
})

var max = Math.max(...p)

var res = pass.indexOf(max)

console.log(String.fromCharCode(res+65))