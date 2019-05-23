// 剑指的思路：
// B[i]的值可以看作下图的矩阵中每行的乘积。
// 下三角用连乘可以很容求得，上三角，从下向上也是连乘。
// 因此我们的思路就很清晰了，先算下三角中的连乘，即我们先算出B[i]中的一部分，然后倒过来按上三角中的分布规律，把另一部分也乘进去

function multiply(array) {
    let res = Array(array.length).fill(1)
    let n = 1
    for (i in array) {
        res[i] *= n
        n *= array[i]
    }
    array.reverse()
    res.reverse()
    n = 1
    for (i in array) {
        res[i] *= n
        n *= array[i]
    }
    res.reverse()
    return res
}

var p = multiply([1, 2, 3, 4, 5])