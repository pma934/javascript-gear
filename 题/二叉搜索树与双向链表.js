function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} 

var root = new TreeNode(10);
root.left =new TreeNode(6);
root.left.left =new TreeNode(4);
root.left.right =new TreeNode(8);

root.right =new TreeNode(14);
root.right.left =new TreeNode(12);
root.right.right =new TreeNode(16);

//递归
// function Convert(pRootOfTree)
// {
//     if(!pRootOfTree){
//         return null
//     }
//     if(pRootOfTree.left){
//         pRootOfTree.left = toLeft(pRootOfTree.left,pRootOfTree)
//         pRootOfTree.left.right = pRootOfTree
//     }
//     if(pRootOfTree.right){
//         pRootOfTree.right = toRight(pRootOfTree.right,pRootOfTree)
//         pRootOfTree.right.left = pRootOfTree
//     }
    
//     while(pRootOfTree.left){
//         pRootOfTree = pRootOfTree.left
//     }
    
//     return pRootOfTree
// }
// function toLeft(node,fnode){
//     if(node.left){
//         node.left = toLeft(node.left,node)
//     }
//     if(node.right){
//         node.right = toRight(node.right,node)
//         p = node.right
//         while(p.right){
//             p = p.right
//         }
//         return p
//     }else{
//         node.right = fnode
//         return node
//     }
// }
// function toRight(node,fnode){
//     if(node.right){
//         node.right = toRight(node.right,node)
//     }
//     if(node.left){
//         node.left = toLeft(node.left,node)
//         p = node.left
//         while(p.left){
//             p = p.left
//         }
//         return p
//     }else{
//         node.left = fnode
//         return node
//     }
// }

//中序遍历
function Convert(pRootOfTree)
{
    if(!pRootOfTree){
        return null
    }
    let stack = []
    mid(pRootOfTree,stack)
    for(let i in stack){
        stack[i].right = i<stack.length-1?stack[i*1+1]:null
    }
    stack.reverse()
    for(let i in stack){
        stack[i].left = i<stack.length-1?stack[i*1+1]:null
    }

    return stack[stack.length-1]
    
}
function mid(node,stack){
    if(node.left){
        mid(node.left,stack)
    }
    stack.push(node)
    if(node.right){
        mid(node.right,stack)
    }
}


var b = Convert(root)
