/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {

    var a = headA;
    var b = headB;

    while(a != b){
        a = !a ? headB : a.next;
        b = !b ? headA : b.next;
    }

    return a;
    
};