function increasingTriplet(nums: number[]): boolean {
   let start = Infinity;
   let second = Infinity;

   for(let num of nums){
    if(num <= start){
        start = num;
    }else if(num <= second){
        second = num;
    }else{
        return true;
    }
   }
    
    return false;
};