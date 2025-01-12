/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {

    if(!head) return head;
    var dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    for(var i=0; i<left-1; i++){
        prev = prev.next;
    }

    var current = prev.next;
    for(var i=0; i<right-left; i++){
        var temp = current.next;
        current.next = temp.next;
        temp.next = prev.next;
        prev.next = temp;
    }

    return dummy.next;  
};