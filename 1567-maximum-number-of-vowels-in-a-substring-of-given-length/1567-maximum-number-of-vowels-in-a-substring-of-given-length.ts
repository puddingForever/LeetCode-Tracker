function maxVowels(s: string, k: number): number {
 const mySet = new Set(['a', 'e', 'i', 'o','u']);
    let arr = s.split("")
    let max = 0;
    
    for(let i=0; i<k; i++){  // s = "leetcode", k = 3 
        if(mySet.has(arr[i])){ 
           max++; // 2
        }
    }
    
    let tmp = max;  
    let cnt = 0;
    for(let i=k; i<arr.length; i++){ // s = "le e  tcode", k = 3 
         if(mySet.has(arr[i])){   
               // 이전의 값이 vowel 이였을 때만 빼줘야한다. 
             if(mySet.has(arr[i-k])){ 
                 tmp = tmp + 1 - 1 ;
             }else{
                 tmp ++;   
             }
             
             max = Math.max(max,tmp); 
         }else{
             if(mySet.has(arr[i-k])){ 
                 tmp--;
             }
         }
    } 

    return max;
};