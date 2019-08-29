const III = [
    '3 3 2',
    '2 3',
    '3 1',
]
const PPP = [
    '2'
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

