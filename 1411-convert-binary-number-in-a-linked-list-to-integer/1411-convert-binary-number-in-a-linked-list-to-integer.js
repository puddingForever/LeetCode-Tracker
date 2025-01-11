/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {

    var num = 0;
    var current = head;
    while(current){
        num = num * 2 + current.val;
        current = current.next;
    }

    return num;
};