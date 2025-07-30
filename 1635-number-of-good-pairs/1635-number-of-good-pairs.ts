function numIdenticalPairs(nums: number[]): number {
     if(nums.length === 1) return 0;

    let count = 0, res = 0;   
 

    for(let i=0; i < nums.length; i++){
	count = i + 1;
	while(count < nums.length){
	       if(nums[i] === nums[count]){
	           res++;
                   }
	    count++;
	}	
    }   

   return res;

};
