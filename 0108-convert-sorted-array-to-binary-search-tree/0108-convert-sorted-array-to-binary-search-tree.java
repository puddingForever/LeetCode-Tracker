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
    public TreeNode sortedArrayToBST(int[] nums) {
        
        // height - balanced bst 
        /*           root (middle value) 
        
             left           right       
       (less than middle)  (bigger than middle)
        */

        
        int left = 0; 
        int right = nums.length - 1; // 4
       
       return sortBST(left,right,nums); 
        
    }    
    
    //  [-10,-3,0,5,9]
    public TreeNode sortBST(int left,int right,int[] nums){  // 
        
        if(left > right) return null; 
        
        // assign root 
        int mid = left + (right-left) / 2;  //
        TreeNode root = new TreeNode(nums[mid]);  
     
        /*
          [-10,-3,0,5,9] 
          
         
         
    
        */
                            
        root.left = sortBST(left,mid-1,nums);  // 0 1
        root.right =  sortBST(mid+1,right,nums); // 1 4 
        
        return root;
        
    }
    
}