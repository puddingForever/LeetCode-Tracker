function maxVowels(s: string, k: number): number {
   const mySet = new Set(['a','e','i','o','u'])
   let max = 0; 
   for(let i=0; i<k; i++){ 
       if(mySet.has(s[i])){  
           max++;
       }
   }

   if(max === k) return max;

   let tmp = max; 
   for(let j=k; j<s.length; j++){
       if(mySet.has(s[j]) && !mySet.has(s[j-k])){
            tmp ++;
        }else if(!mySet.has(s[j])  && mySet.has(s[j-k])){
            tmp --;
        }
        max = Math.max(tmp, max);
    }
    return max;
};