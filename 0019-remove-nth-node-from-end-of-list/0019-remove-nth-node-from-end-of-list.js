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

    if(!head.next) return head.next;

    var dummy1 = new ListNode(0);
    dummy1.next = head;
     var dummy2 = new ListNode(0);
    dummy2.next = head
    var fast = head;
    var slow = dummy1.next;
    var prev = dummy2.next;

    for(var i=0; i<n; i++){
        if(!fast) return null; // out of bounds
        fast = fast.next;
    }

    if(!fast){
            prev = prev.next;
            dummy2.next = prev;
    }else{
        while(fast){
            fast = fast.next;
            prev = slow;
            slow = slow.next
        }

        prev.next = slow.next;

    }

    
    return dummy2.next;
};