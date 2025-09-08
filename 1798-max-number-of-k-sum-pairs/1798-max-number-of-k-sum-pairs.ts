function maxOperations(nums: number[], k: number): number {
    nums.sort((a,b) =>  a-b);
    let res = 0, start = 0, end = nums.length - 1;

    while(start < end){
        let sum  = nums[start] + nums[end];
        if( sum === k ){
            res++;
            start ++;
            end -- ;
        }else if( sum < k){
            start++;
        }else{
            end--;
        }
    }

    return res;
};