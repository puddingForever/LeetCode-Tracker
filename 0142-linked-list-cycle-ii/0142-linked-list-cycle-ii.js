/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

    var slow = head;
    var fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast) break;
    }
    if(!fast || !fast.next) return null;

    slow = head;
    while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
    }

    return fast;
};