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
        
        
        // 1. recursion 
        // 1.1 middle from the array to be the root  (already sorted, no sorting required )
        // 1.2 recursion to both left and right (check the middle and position to the )
        // 1.3 iterate left first then right .. 
        
        int left = 0; 
        int right = nums.length - 1; // 4
       
       return sortBST(left,right,nums); 
        
    }    
    
    //  [-10,-3,0,5,9]
    public TreeNode sortBST(int left,int right,int[] nums){  
        
        if(left > right) return null; 
        
        // asign root 
        int mid = left + (right-left) / 2; // nums[2] nums[0] nums[3]
        TreeNode root = new TreeNode(nums[mid]);  // root : 0  -10  5 
     
        /*
        [0,-10, 5  ]
        
          [   ,-3,   ,  ,9
    
        */
                            
        root.left = sortBST(left,mid-1,nums);  //  
        root.right =  sortBST(mid+1,right,nums); //  3, 4 
        
        return root;
        
    }
    
}