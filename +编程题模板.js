const III = [
<<<<<<< HEAD
    '10',
]
const PPP = [
    '5'
=======
    '1,1.5 0,0 2,0 1,2 0,2',
    '2,1 0,0 2,0 1,1 1,2 0,2'
]
const PPP = [
    'true',
    'false'
>>>>>>> d27dfd805493da094561b357d2c49b55c6b72a16
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
