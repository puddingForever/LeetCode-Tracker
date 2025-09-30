function wordPattern(pattern: string, s: string): boolean {
    const patternObj = {};
    const strArr = s.split(" ");
    if(strArr.length !== pattern.length) return false;
    
    for(let i=0; i<pattern.length; i++){
        const word = patternObj[pattern[i]]; 
        if(word){ // there's already mapped word 
            if(word !== strArr[i]){
                return false;
            }
        }else{ // initialize mapping 
             patternObj[pattern[i]] = strArr[i];
        }
    }

    // if duplicate values are detected , return false 
    const removedDup = new Set(Object.values(patternObj)).size; // 2 
    const originLen = Object.values(patternObj).length; // 3 

   return removedDup === originLen; 
};