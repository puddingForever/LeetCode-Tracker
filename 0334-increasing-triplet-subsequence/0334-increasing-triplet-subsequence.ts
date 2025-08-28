function increasingTriplet(nums: number[]): boolean {
    
  let first = Infinity , second = Infinity ;

     for(let num of nums){
        if(first >= num){
            first = num;  
        }else if(second >= num){
            second = num; 
        }else{
	          return true;
       }
    }  

  return false;

};