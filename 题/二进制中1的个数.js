// function NumberOf1(n) {
//     var s = 0
//     if (n >= 0) {
//         [...n.toString(2)].map(x => {
//             x == '1' ? s++ : null
//         })
//     } else {
//         let index = 0;
//         let len =(-n).toString(2).length;
//         [...(-n).toString(2)].map((x, y) => {
//             x == '1' ? [index = y,s++]: null
//         })
//         s = 32-[len-index-1]-s+1
//     }
//     return s
// }

function NumberOf1(n) {
    // write code here
    var count = 0,
        flag = 1;
    while (flag) {
        console.log([n & flag] +"  :  "+flag)
        if (n & flag)
            count++;
        flag = flag << 1;
    }
    return count;
}

// NumberOf1(-2147483648)
// NumberOf1(-1)
NumberOf1(-20)