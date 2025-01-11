/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    if(!head) return null;
    var dummy1 = new ListNode(0);
    var dummy2 = new ListNode(0);
    var prev1 = dummy1;
    var prev2 = dummy2;
    var temp = head;

    while(temp){
        if(temp.val < x){
            prev1.next = temp;
            prev1 = prev1.next;
        }else{
            prev2.next = temp;
            prev2 = prev2.next;
        }
        temp = temp.next;
    }

    prev2.next = null;
    prev1.next = dummy2.next;
    head = dummy1.next;
    return head;
};