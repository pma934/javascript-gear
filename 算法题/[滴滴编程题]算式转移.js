// 改变算式中可以改变顺序的数字，使数字字典序最小

const III = [
    '19',
    '5 * 4 * 6 + 3 / 2 + 4 * 2 * 6 - 5 - 4 - 8 * 4 * 5 / 4 / 2 / 7 / 5 * 6 * 3'
]
const PPP = [
    '4 * 5 * 6 + 3 / 2 + 2 * 4 * 6 - 4 - 5 - 4 * 5 * 8 / 2 / 4 / 5 / 7 * 3 * 6'
]
//-----------------------------------
let III_INDEX = 0
let PPP_INDEX = 0

function readline() {
    return III[III_INDEX++]
}

function print(x) {
    if (x === PPP[PPP_INDEX]) {
        console.log('ok')
    } else {
        console.log(x)
        console.log(PPP[PPP_INDEX])
    }
    PPP_INDEX++
}
//-----------------------------------


var len = +readline()
var suanshi = readline().split(' ')

var num
var sym
var arr = []
for (let i = 0; i < 2 * len;) {
    num = +suanshi[i++]
    switch (suanshi[i++]) {
        case '-':
            if (sym === '-') {
                arr.push(num)
            } else {
                arr.push(num)
                // console.log('+', arr)
                // //---
                suanshi = change(suanshi, arr, i - 2)
                arr = []
            }
            sym = '-'
            break;
        case '/':
            if (sym === '/') {
                arr.push(num)
            } else if (sym === '+') {
                // console.log('+', arr)
                // //---
                suanshi = change(suanshi, arr, i - 4)
                arr = []
            } else if (sym === '*') {
                arr.push(num)
                // console.log('+', arr)
                // //---
                suanshi = change(suanshi, arr, i - 2)
                arr = []
            }
            sym = '/'
            break;
        case '+':
            if (sym === '+' || i === 2) {
                arr.push(num)
            } else {
                arr.push(num)
                // console.log('*', arr)
                // //---
                suanshi = change(suanshi, arr, i - 2)
                arr = []
            }
            sym = '+'
            break;
        case '*':
            if (sym === '*' || i === 2) {
                arr.push(num)
            } else if (sym === '/') {
                arr.push(num)
                // console.log('+', arr)
                // //---
                suanshi = change(suanshi, arr, i - 2)
                arr = []
            } else {
                // console.log('+', arr)
                // //---
                suanshi = change(suanshi, arr, i - 4)
                arr = [num]
            }
            sym = '*'
            break;
        default:
            arr.push(num)
            // console.log(sym, arr)
            // //---
            suanshi = change(suanshi, arr, i - 2)
    }
}

print(suanshi.join(' '))


function change(suanshi, arr, i) {
    arr = arr.sort((x, y) => y - x)
    for (let j = 0; j < arr.length; j++) {
        suanshi[i - 2 * j] = arr[j]
    }
    return suanshi
}