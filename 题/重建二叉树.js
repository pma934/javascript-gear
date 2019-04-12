var pre = [1, 2, 4, 7, 3, 5, 6, 8]
var vin = [4, 7, 2, 1, 5, 3, 8, 6]

function reConstructBinaryTree(pre, vin) {
    var root = {}
    var left_length
    if (pre.length == 0) {
        return null
    } else {
        left_length = vin.indexOf(pre[0])
        root.val = pre[0]
        root.left = reConstructBinaryTree(pre.splice(1, left_length), vin.splice(0, left_length))
        root.right = reConstructBinaryTree(pre.splice(1), vin.splice(1))
        return root
    }
}


var aa = reConstructBinaryTree(pre, vin)

console.log(aa)