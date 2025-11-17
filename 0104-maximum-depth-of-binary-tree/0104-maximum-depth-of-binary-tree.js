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
 * @return {number}
 */
var maxDepth = function(root) {
   if (!root) return 0;

    let leftLen = 1; 
    let rightLen = 1; 
    
    function traverse(currentNode, len, isLeft){
        // leaf면 결과 업데이트
        if(!currentNode.left && !currentNode.right){
            if (isLeft) leftLen = Math.max(leftLen, len);
            else rightLen = Math.max(rightLen, len);
        }
        
        if(currentNode.left) {
            traverse(currentNode.left, len + 1, isLeft); 
        } 
        if(currentNode.right){
            traverse(currentNode.right, len + 1, isLeft);
        } 
    }
    
    if(root.left) {
        traverse(root.left, leftLen + 1, true);
    } 
    
    if(root.right){
        traverse(root.right, rightLen + 1, false);
    }

    return Math.max(leftLen, rightLen);
};