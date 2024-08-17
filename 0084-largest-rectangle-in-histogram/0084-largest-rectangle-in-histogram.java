class Solution {
    public int largestRectangleArea(int[] heights) {
        
        // input : heights 
        // constraints : 1 <= heights.length <= 105 , width 1 (constant)
        // should return : area of the largest rectangle (area =  width * height )
        
        //       
        // [2,1,   5,6 ,2,3] => 2 * 5 ... 
        // 1. if element is increasing order , have to increament the width  
           //  => store index in a stack 
           //  => should calculate the last area as well (thats why we increment the length of an array ) 
        // 2. if element is decreasing order , calculate the area and remove index from the stack 
           //  =>  stop calculate when the height is smaller than the current height 
        
    
        
        int max = 0; 
        Stack<Integer> myStack = new Stack();
        myStack.push(0); // base case 
        
        
        for(int i=1; i<= heights.length; i++){ // [2,4]
            
            int curr = ( i == heights.length ) ?  -1   : heights[i]; // should always calcualte 
            
            while(!myStack.isEmpty() &&  curr < heights[myStack.peek()]){ // calculate 
                int height = heights[myStack.pop()];
                int width = myStack.isEmpty() ? i :  i - myStack.peek() - 1;  
                int currArea = height * width; 
                max = Math.max(max,currArea);
                
            }
            
            // if next bar height is increasing order 
            
            myStack.push(i);
            
            
        }
    
        return max;
        
    }
}

// TC : O(n) SC : O(n)

