function ListNode(x){
    this.val = x;
    this.next = null;
}

pHead1 = new ListNode(5)
pHead2 = new ListNode(7)
pHead1.next = new ListNode(6)
pHead2.next = new ListNode(4)
p3 = new ListNode(3)
pHead1.next.next = p3
//pHead2.next.next = p3


function FindFirstCommonNode(pHead1, pHead2)
{
    // write code here
    let p1 = pHead1,
        p2 = pHead2,
        list1 = [],
        list2 = [];
    while(p1){
        list1.push(p1.val)
        p1 = p1.next
    }
    while(p2){
        list2.push(p2.val)
        p2 = p2.next
    }
    let i = 1
    for(;i<=Math.min(list1.length,list2.length);i++){
        if(list1[list1.length-i]!=list2[list2.length-i]){
            break;
        }
    }
    if(i==1){
        return;
    }
    i = list1.length-i+1
    while(i--){
        pHead1 = pHead1.next
    }
    return pHead1
}

FindFirstCommonNode(pHead1, pHead2)