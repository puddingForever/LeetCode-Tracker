function pivotIndex(nums: number[]): number {
    let total = nums.reduce((acc,val) => acc + val,0);
    let leftSum=0,rightSum=0;
 
    for(let i=0; i<nums.length; i++){
        rightSum = total - leftSum - nums[i]; // 0 
        if(leftSum === rightSum) return i;
        leftSum += nums[i]; 
    }
    return -1;
};