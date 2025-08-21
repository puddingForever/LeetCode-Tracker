function productExceptSelf(nums: number[]): number[] {
     let len = nums.length;
    let leftArr = new Array(len);
    let answer = new Array(len);
    let prod = 1;
   
    for(let i=0; i<len; i++){ // 1 1 2 6
      leftArr[i] = prod;
       prod = prod * nums[i]
    }
    prod = 1;
    for(let i=len-1; i>=0; i--){
       answer[i] = leftArr[i] * prod;
       prod = prod * nums[i];
    }

   return answer;
   
    
};