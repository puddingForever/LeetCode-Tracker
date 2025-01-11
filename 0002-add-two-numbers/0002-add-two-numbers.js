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

    if(l1 === null && l2 === null && carry === 0){
        return null;
    }
    var listNode = new ListNode(0);
    var res = carry;
    if(l1) res += l1.val;
    if(l2) res += l2.val;

    var value = res % 10;
    listNode.val = value; 

    if(l1 || l2){
        var more = addNum( ( l1 === null ? null : l1.next)  ,
                            ( l2 === null ? null : l2.next),
                                (res > 9 ? 1 : 0));
        listNode.next = more;
    }

    return listNode;
}