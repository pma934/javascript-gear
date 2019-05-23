function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

let t1 =new TreeNode(1)
let t2 =new TreeNode(2)
let t3 =new TreeNode(3)
let t4 =new TreeNode(4)
let t5 =new TreeNode(5)
let t6 =new TreeNode(6)
let t7 =new TreeNode(7)
let t8 =new TreeNode(8)
t1.left = t2;t1.right = t3;t2.left=t4;t2.right=t5;t3.left=t6;t3.right=t7;


//不需要reverse
//添加了层数标记
//奇数层按右到左的顺序在下一层标记后面添加  |1|3  --> |1| 2 3
//偶数层按左到右的顺序在下一层标记后面添加  |1|2 3|7 --> |1|2 3|6 7 --> |1|2 3|5 6 7
function Print(pRoot)
{
    if(!pRoot){
        return []
    }
    let stack = [1,pRoot]
    let lay //层数
    let node
    let index = 0
    let res=[];
    while(1){
        node = stack[index++]
        if(typeof node == 'number'){
            stack.push(node+1)
            lay = node
            node = stack[index++]
            res.push([])
        }
        if(typeof node == 'number'){
            res.pop()
            break;
        }else{
            res[lay-1].push(node.val)
            let i = stack.indexOf(lay+1)
            if(lay & 1){//奇数层
                if(node.left){stack.splice(i+1,0,node.left)}
                if(node.right){stack.splice(i+1,0,node.right)}
            }else{//偶数层
                if(node.right){stack.splice(i+1,0,node.right)}
                if(node.left){stack.splice(i+1,0,node.left)}
            }
        }
    }
    return  res
}


let p = Print(t1)
