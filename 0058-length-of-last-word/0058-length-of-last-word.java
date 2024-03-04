class Solution {
    public int lengthOfLastWord(String s) {
        String[] arr = s.split(" ");
        int lastLen = arr.length-1;
        int result = arr[lastLen].length();
        
        return result;
    }
}