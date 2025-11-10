function productExceptSelf(nums: number[]): number[] {
   let len = nums.length;
   let leftArr = new Array(len);
   let answerArr = new Array(len);
   let prod = 1;

    for(let i=0; i<nums.length; i++){
        leftArr[i] = prod;
        prod = prod * nums[i];
    }
    prod = 1;
    for(let i= nums.length-1; i>=0; i--){
        answerArr[i] = leftArr[i] * prod;
        prod = prod * nums[i];
    }
    
    return answerArr;
    
};