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
t1.left = t2;t1.right = t3;t2.left=t4;t2.right=t5;t3.right=t7;


function Serialize(pRoot)
{
    // write code here
    if(!pRoot){
        return []
    }else{
        return [pRoot.val,Serialize(pRoot.left),Serialize(pRoot.right)]
    }
}
function Deserialize(s)
{
    if(s.length){
        let node =new TreeNode(s[0])
        node.left = Deserialize(s[1])
        node.right = Deserialize(s[2])
        return node
    }else{
        return null
    }
}

let p =Serialize(t1)
let l = Deserialize(p)
