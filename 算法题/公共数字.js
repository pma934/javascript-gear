//是否存在一个公共数组，使得输入的所有数组，要么左边等，要么右边等；否则输出No

var len = 4
var input = [
    [1, 5],
    [1, 4],
    [1, 3],
    [3, 6]
]

// var len = Number(readline())
// var input = []
// for(let index=0;index<len;index++){
//     let inp = readline().split(" ")
//     input.push([inp[0]*1,inp[1]*1])
// }

function output(len, input) {
    var left = new Set()
    var right = new Set()
    for (var i = 0; i < len && left.size < 2 && right.size < 2; i++) {
        left.add(input[i][0])
        right.add(input[i][1])
    }

    if (left.size === 2 && right.size === 2) {
        return "No"
    }
    if (i === len) {
        return [
            [...left][0],
            [...right][0]
        ].join(" ")
    }

    var res = [undefined, undefined]
    res[0] = left.size === 1 ? [...left][0] : undefined
    res[1] = right.size === 1 ? [...right][0] : undefined

    for (; i < len && (left.size < 2 || right.size < 2); i++) {
        if(!(left.has(input[i][0])||right.has(input[i][1]))){
            return "No"
        }
        left.add(input[i][0])
        right.add(input[i][1])
    }

    if (i === len) {
        return [
            [...left][0],
            [...right][0]
        ].join(" ")
    }

    res[0] = res[0] ? res[0] : input[i - 1][0]
    res[1] = res[1] ? res[1] : input[i - 1][1]

    for (; i < len; i++) {
        if (!((res[0] === input[i][0]) || (res[1] === input[i][1]))) {
            return "No"
        }
    }
    return res.join(" ")
}

console.log(output(len, input))