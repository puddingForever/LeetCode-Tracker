/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        
        if( (head.next == null && n == 1)  || head == null) return null;
        
        ListNode dummy = new ListNode(-1);
        dummy.next = head;
        ListNode p1 = head;
        ListNode prev = head;

        
        for(int i=0; i<n; i++){
            p1 = p1.next;
        }
        
        if(p1 == null){
            return head.next;
        }
        
        while(p1.next != null){   
            p1 = p1.next;
            prev = prev.next;  
        }
        
        prev.next = prev.next.next;
        
        return head;
        
    }
}