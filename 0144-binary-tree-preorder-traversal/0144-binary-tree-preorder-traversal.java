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
        
        class Traversal{
            Traversal(TreeNode root){
                results.add(root.val);
                if(root.left != null){
                    new Traversal(root.left);
                }
                if(root.right != null){
                    new Traversal(root.right);
                }
            }
        }
        
        new Traversal(root);
        
        return results;
        
        
    }
}