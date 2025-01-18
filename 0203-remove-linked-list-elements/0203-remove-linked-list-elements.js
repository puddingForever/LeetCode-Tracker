/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var dummy = new ListNode(0);
    var prev = dummy;
    var temp = head;

    while(temp){
       if(temp.val === val){
            temp = temp.next;
       }else{
            prev.next = temp;
            prev = prev.next;
            temp = temp.next;
       }
    }

    prev.next = null;
    
    return dummy.next;
};