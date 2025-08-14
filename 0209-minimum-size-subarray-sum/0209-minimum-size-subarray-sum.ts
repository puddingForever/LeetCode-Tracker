function minSubArrayLen(target: number, nums: number[]): number {
    let start =0 ;
    let end = 0;
    let temp = 0;
    let min = Infinity;

    while(start < nums.length){
        if(temp < target && end < nums.length){
            temp += nums[end];
            end++;
        }else if(temp >= target){
            min = Math.min(min, end-start);
            temp -= nums[start];
            start++;
        }else{
            break;
        }

    }

    return min === Infinity ? 0 : min;
};