class Solution {
    public int specialArray(int[] nums) { 
        
        Arrays.sort(nums); // 배열을 오름차순으로 정렬
        int n = nums.length;

        // 각 x 값에 대해 조건을 만족하는지 확인
        for (int x = 1; x <= n; x++) { // 0 3 6 7 7 
            int count = 0;
            for (int num : nums) {
                if (num >= x) {
                    count++; // 4 
                }
            }
            if (count == x) {
                return x;
            }
        }
        return -1;
    }
}