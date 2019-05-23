//1
function PrintFromTopToBottom(root)
{
    var p = {},
        l = [],
        res = []
    if(root == null){
        return []
    }else{
        addRoot(root,1,p,l)
    }
    l.sort((x,y)=>{
        if(x>y){
            return 1
        }else{
            return -1
        }
    })
    for(a of l){
        res.push(p[a])
    }
    return res
}
function addRoot(root,k,p,l){
    p[k] = root.val
    l.push(k)
    if(root.left != null ){
        addRoot(root.left,2*k,p,l)
    }
    if(root.right != null ){
        addRoot(root.right,2*k+1,p,l)
    }
}

//2
function PrintFromTopToBottom(root)
{
    // write code here
    list =[]
    data =[]
    if(root){
       list.push(root) 
    }
    while(list.length){
        let node = list.shift()
        if(node.left){
            list.push(node.left) 
        }
        if(node.right){
            list.push(node.right) 
        }
        data.push(node.val)
    }
    return data
}