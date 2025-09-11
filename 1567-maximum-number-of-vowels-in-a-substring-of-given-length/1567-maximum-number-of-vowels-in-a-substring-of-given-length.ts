function maxVowels(s: string, k: number): number {
   const mySet = new Set(['a','e','i','o','u'])
    let max = 0; 
   for(let i=0; i<k; i++){ 
       if(mySet.has(s[i])){  
           max++;
       }
   }
    
  // 둘다 모음이 아니면 계산필요 X 
    // 내가 모음이고 이전이 모음이면 계산 필요 X ( + 1 하고 - 1 하니까 )
    // 내가 모음이고 이전이 모음이 아니면 + 1  
   let tmp = max; 
   for(let j=k; j<s.length; j++){
       if(mySet.has(s[j]) && !mySet.has(s[j-k])){
            tmp = tmp + 1; 
        }else if(!mySet.has(s[j])  && mySet.has(s[j-k])){
            tmp = tmp - 1;
           console.log(s[j], tmp)
        }
        max = Math.max(tmp, max);
    }
    return max;
};