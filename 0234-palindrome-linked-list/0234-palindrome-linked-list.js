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
        if(!head.next) return true;
     var slow = head;
     var fast = head;
     var stack = [];
   while(fast && fast.next){
	stack.push(slow.val);
            slow = slow.next;
	fast = fast.next.next;
   }


   if(fast){
	slow = slow.next;
   }

  var cnt = stack.length-1;
 
 while(slow){
     if(stack[cnt] !== slow.val){
        return false;
     } 
     slow = slow.next;
     cnt--;
  }

  return true;   
};