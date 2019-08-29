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

//N 人 ，M语言 ，K 行
var [N, M, K] = readline().split(' ').map(x => +x)
var langues = new Array(N).fill(0).map(_ => [])

function tong(arr1, arr2) {
    let s = new Set([...arr1, ...arr2])
    return s.size === arr1.length + arr2.length ? false : true
}
// for (let i = 0; i < K; i++) {
//     let [i, v] = readline().split(' ').map(x => +x)
//     langues[i - 1].push(v)
// }
// var nums = 0 //啥都不会的人数
// var t = langues.filter(x => {
//     var len = x.length
//     if (len === 0) {
//         nums++
//     }
//     return len
// })
// for (let i = 0; i < t.length; i++) {
//     for (let j = i + 1; j < t.length; j++) {
//         let arr1 = t[i]
//         let arr2 = t[j]
//         if (tong(arr1, arr2)) {
//             t[i] = [...new Set([...arr1, ...arr2])]
//             t.splice(j, 1)
//             j--
//         }
//     }
// }

// var res = t.length + nums - 1
// console.log(res)