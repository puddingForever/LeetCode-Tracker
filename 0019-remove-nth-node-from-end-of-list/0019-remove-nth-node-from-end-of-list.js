/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head;
    let fast = head;
    let prev = null;

    if(slow.next === null) return slow.next;

    let i = 0;
    while( i < n){
        i++;
        fast = fast.next;
    }

    while(fast){
        prev = slow;
        slow = slow.next;
        fast = fast.next;
    }

    if(prev){
        prev.next = slow.next;
    }else{
        head = head.next;
    }
    

    return head;
};