//解法有点麻烦，该用递归试试
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead)
{
    // write code here
    let p1 =pHead
    let p2
    let p3
    while(p1){
        let value = p1.val
        let flag = 1
        p2 = p1.next
        while(1){
            if(!p2 || p2.val != value){
                break
            }else{
                flag = 0
                p2 = p2.next
            }
        }
        if(flag){
            break
        }else{
            pHead = p2
            p1 = p2
        }
    }
    while(1){
        if(!p1){
            break;
        }
        p2=p1.next
        if(!p2){
            break;
        }
        p3=p2.next
        if(!p3){
            break;
        }
        if(p3.val==p2.val){
            while(p3 && p2.val==p3.val){
                p3=p3.next
            }
            p1.next = p3
        }else{
            p1 = p2
        }
    }
    return pHead
}