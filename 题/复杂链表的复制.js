// 复杂链表的复制
/*
*解题思路：
*1、遍历链表，复制每个结点，如复制结点A得到A1，将结点A1插到结点A后面；
*2、重新遍历链表，复制老结点的随机指针给新结点，如A1.random = A.random.next;
*3、拆分链表，将链表拆分为原链表和复制后的链表
*/
/*function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}*/
function Clone(pHead)
{
    // write code here
    if(pHead === null) return null;
 
    let p = pHead;
 
    // 第一步：先复制一份每个节点，并插到其后
    while(p !== null) {
        let node = new RandomListNode(p.label);
        node.next = p.next;
        p.next = node;
        p = node.next;
    }
 
    // 第二步：将复制节点的random指针指向正确的复制节点
    p = pHead;
    while(p !== null) {
        if(p.random !== null) {
            p.next.random = p.random.next;
        }
        p = p.next.next;
    }
 
    // 第三步：拆分「原链表」和「复制链表」
    p = pHead;
    let cloneHead = p.next;
    let q = cloneHead;
 
    while(p !== null) {
        p.next = p.next.next;
        if(q.next !== null) {
            q.next = q.next.next;
        }
        p = p.next;
        q = q.next;
    }
 
    return cloneHead;
}