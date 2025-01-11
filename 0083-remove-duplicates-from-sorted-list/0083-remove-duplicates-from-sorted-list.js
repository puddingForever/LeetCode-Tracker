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
var deleteDuplicates = function(head) {

   var dummy = new ListNode(0);
   dummy.next = head;
   prev = dummy; // cuz dummy should always point to the front  
   var temp = head;
   var mySet = new Set();
   if(!head) return null;

   while(temp){
    if(mySet.has(temp.val)){
        prev.next = temp.next;
    }else{
        mySet.add(temp.val);
        prev = temp;
    }
    temp = temp.next;
   }

   return dummy.next;

};