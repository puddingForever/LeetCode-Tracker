/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
      
        ArrayList<Integer> results = new ArrayList();
        
        if(root == null) return results;
        
        Stack<TreeNode> stack = new Stack();
        stack.push(root);
        TreeNode curr = root;
    
        while(!stack.isEmpty()){
            curr = stack.pop();
            while(curr != null){
                results.add(curr.val);
                if(curr.right != null){
                    stack.push(curr.right);
                }
                
                curr = curr.left;
            }
        }
        
        return results;    
        
    }
}