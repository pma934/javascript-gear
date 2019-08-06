/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
//超时
// var findKthNumber = function (n, k) {
//     //十叉树 
//     var res = 0
//     var next = function (num) {
//         if (!res) {
//             for (let i = 0; i < 10; i++) {
//                 var newNum = num * 10 + i
//                 if (newNum === 0) {
//                     continue;
//                 } else if (newNum <= n) {
//                     res = --k === 0 ? newNum : res
//                     next(newNum)
//                 } else {
//                     break;
//                 }
//             }
//         }
//     }
//     next(0)
//     return res
// };
//超时
// var findKthNumber = function (n, k) {
//     //十叉树 
//     res = 1
//     while(--k){
//         // console.log(res)
//         if(res*10<=n){
//             res *=10
//         }else if(res%10!==9&&res+1<=n){
//             res += 1
//         }else{
//             res = Math.floor(res/10)
//             while(res%10===9){
//                 res = Math.floor(res/10)
//             }
//             res += 1
//         }
//     }
//     return res
// };
//思路简单，从前到后确定每一个位，写不好写
var findKthNumber = function (n, k) {
    //十叉树 
    var cur = 1;
        k--;
        while (k > 0) {
            var step = 0, first = cur, last = cur + 1;
            while (first <= n) {
                step += Math.min(last, (n + 1)) - first;
                first *= 10;
                last *= 10;
            }

            if (step > k) {
                //在树里
                k--;
                cur *= 10;
            }
            if (step <= k) {
                //不在树里
                k -= step;
                ++cur;
            }
        }
        return cur;
};

p = findKthNumber(10,3)
console.log(p)