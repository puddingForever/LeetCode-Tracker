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
    
    private void inorder(TreeNode root, ArrayList<Integer> res){
        if(root == null) return;
        inorder(root.left,res);
        res.add(root.val);
        inorder(root.right,res);
        return;
    }
    
    private TreeNode solve(ArrayList<Integer> res,int idx){
        if(idx >= res.size() ) return null;
        
        TreeNode root = new TreeNode(res.get(idx));
        root.right = solve(res, idx + 1);
        return root;
        
    }
    
    
    public TreeNode increasingBST(TreeNode root) {
        
        ArrayList<Integer> res = new ArrayList();
        inorder(root,res);
        return solve(res,0);
       
        
    }
}