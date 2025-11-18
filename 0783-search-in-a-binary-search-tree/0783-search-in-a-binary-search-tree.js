/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {

    function traverse(currentNode){
        if(!currentNode) return null;
        if(currentNode.val === val) return currentNode;
        if( val < currentNode.val){
            return traverse(currentNode.left);
        }else {
            return traverse(currentNode.right);
        }
    }
    return traverse(root);
}; 