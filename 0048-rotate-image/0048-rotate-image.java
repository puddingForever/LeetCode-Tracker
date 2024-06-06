class Solution {
    public void rotate(int[][] matrix) {
        
        int curr = 0;
        
        for(int i=0; i<matrix.length; i++){
            for(int j=0; j<matrix[i].length-i; j++){
                curr = matrix[i][j];
                matrix[i][j] = matrix[matrix.length-j-1][matrix.length-i-1];
                matrix[matrix.length-j-1][matrix.length-i-1] = curr;
            }
        }
        
        for(int i=0; i<matrix.length/2; i++){
            for(int j=0; j<matrix.length; j++){
                curr = matrix[i][j];
                matrix[i][j] = matrix[matrix.length-i-1][j];
                matrix[matrix.length-i-1][j] = curr;
            }
        }
        
    }
}