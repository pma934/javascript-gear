function ListNode(val) {
    this.val = val;
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    var sum = l1.val + l2.val
    var res = new ListNode(sum%10)
    var next = res
    var carry = Math.floor(sum/10)
    l1 = l1?l1.next:null
    l2 = l2?l2.next:null
    while(carry||l1||l2){
        sum = (l1?l1.val:0) + (l2?l2.val:0) + carry
        next.next = new ListNode(sum%10)
        carry = Math.floor(sum/10)
        next = next.next 
        l1 = l1?l1.next:null
        l2 = l2?l2.next:null
    }
    return res
};

l1 = new ListNode(5)
// l1.next = new ListNode(4)
// l1.next.next = new ListNode(3)
l2 = new ListNode(5)
// l2.next = new ListNode(6)
// l2.next.next = new ListNode(4)

c = addTwoNumbers(l1,l2)

