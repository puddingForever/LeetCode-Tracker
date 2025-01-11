/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

    var prev = null;
    var temp = head;
    var curr = head;

    while(temp){
        temp = temp.next;
        curr.next = prev;
        if(!temp) break;
        prev = curr;
        curr = temp;
       
    }

    return curr;
    
};