/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function traverse(currentNode,leafs = []){
      if(!currentNode) return;

      if(!currentNode.left && !currentNode.right){
         leafs.push(currentNode.val);
      }

      if(currentNode.left)  traverse(currentNode.left,leafs);
      if(currentNode.right)  traverse(currentNode.right,leafs);

       return leafs;
    }

    const leftLeaves = traverse(root1);
    const rightLeaves = traverse(root2);

    if(leftLeaves.length !== rightLeaves.length) return false;

    for(let i=0; i<rightLeaves.length; i++){
       if(leftLeaves[i] !== rightLeaves[i]) return false;
    }
    return true;
};