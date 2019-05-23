function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let t1 = new TreeNode(5)
let t2 = new TreeNode(3)
let t3 = new TreeNode(7)
let t4 = new TreeNode(2)
let t5 = new TreeNode(4)
let t6 = new TreeNode(6)
let t7 = new TreeNode(8)
t1.left = t2;
t1.right = t3;
t2.left = t4;
t2.right = t5;
t3.left = t6;
t3.right = t7;

//我的思路：暴力寻找
// function KthNode(pRoot, k)
// {
//     let min = pRoot
//     let stack = []
//     while(min.left){
//         stack.push(min)
//         min = min.left
//     }
//     let next = min
//     for(i=1;i<k;i++){
//         next = nextNode(next,stack)
//         if(!next){
//             return null
//         }
//     }
//     return next
// }

// function nextNode(node,stack){
//     if(node.right){
//         //stack.push(node)  不要把比当前结点小的节点加入栈
//         let next = node.right
//         if(next.left){
//             stack.push(next)
//             next = next.left
//         }
//         return next
//     }else{
//         return stack.pop()
//     }
// }

//其他思路：使用中序遍历
function KthNode(pRoot, k) {
    if (!pRoot) {
        return null
    }
    let index = 0
    return function(pRoot, k) {
        console.log(arguments.callee)
        console.log(arguments.callee.caller)
        if (pRoot.left) {
            val = arguments.callee(pRoot.left, k)
            if (val){return val;}
        }
        if (++index == k){return pRoot;}
        if (pRoot.right) {
            val = arguments.callee(pRoot.right, k);
            if (val){return val;}
        }
        return null;
    }(pRoot, k)
}



p = KthNode(t1, 2)
