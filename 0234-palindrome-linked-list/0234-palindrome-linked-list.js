/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var stackArr = [];
    var slow = head;
    var fast = head;

    while(fast && fast.next){
        stackArr.push(slow.val);
        slow = slow.next;
        fast = fast.next.next;
    }

    if(fast){
        slow = slow.next;
    }

    var cnt = stackArr.length-1;

    while(slow){
        var stack = stackArr[cnt];
        if(stack !== slow.val){
            return false;
        }
        slow = slow.next;
        cnt--;
    }

    return true;
};
