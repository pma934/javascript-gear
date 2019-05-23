// 性质：

// 二叉排序树的性质：左子树上所有节点的值均小于它的根节点；右子树上所有节点的值均大于它的根节点。
// 二叉排序树后序遍历的性质：序列最后一个数字是根节点，序列剩余部分分成两部分，前一部分是左子树，后一部分是右子树。
// 举例：

// 判断序列{5,7,6,9,11,10,8}是否是二叉排序树的后序遍历。其中，8是根节点，{5,7,6}比8小是左子树，{9,11,10}比8大是右子树。
// 判断{5,7,6}是否是二叉排序树，其中6是根节点，5比6小是左子树，7比6大是右子树。
// 判断{9,11,10}是否是二叉排序树，其中10是根节点，9比10小是左子树，11比10大是右子树。

function VerifySquenceOfBST(sequence)
{
    if(qqq(sequence)){
        return 'Yes'
    }else{
        return 'No'
    }
}
function qqq(sequence){
        if(sequence.length == 0 || sequence.length == 1){
        return true
    }
    let root = sequence.splice(-1,1)
    let left;
    let right;
    if(sequence[0]>root){
        right = sequence
    }
    else if(sequence[sequence.length-1]<root){
        left = sequence
    }
    else{
        let i = 0
        for(;i<sequence.length;i++){
            if(sequence[i]<root && sequence[i+1]>root){
                break;
            }
        }
        left = sequence.slice(0,i+1)
        right = sequence.slice(i+1)
    }
    return VerifySquenceOfBST(left)&&VerifySquenceOfBST(right)
}

VerifySquenceOfBST([1,2,3,4,6,7,8,9,5])