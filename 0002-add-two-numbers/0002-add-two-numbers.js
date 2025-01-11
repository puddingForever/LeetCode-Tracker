/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode} 
 */
var addTwoNumbers = function(l1, l2) {
    
    return addNum(l1,l2,0);
};


function addNum(l1,l2,carry){
   
    if(!l1 && !l2 && carry === 0) return null;

    var value = carry;
    if(l1) value += l1.val;
    if(l2) value += l2.val;
    var res = value % 10;
    var list = new ListNode();
    list.val = res;

    if(l1 || l2){
        var more = addNum( ( l1 === null ? null : l1.next) 
                            , (l2 === null ? null : l2.next)
                            , ( value > 9 ? 1 : 0) )
        list.next = more;
    }

    return list;

}