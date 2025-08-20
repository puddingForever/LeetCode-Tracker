function mergeAlternately(word1: string, word2: string): string {

    if(word1.length === 1 && word2.length === 1){
        return word1[0] + word2[0];
    }else if(word1.length === 0 && word2.length > 0){
        return word2;
    }else if(word1.length > 0 && word2.length === 0){
        return word1; 
    }
    
    let merged = "";
    let res = "";
    let firstStart = word1[0]; // a 
    let secondStart = word2[0]; // b
    
    merged = firstStart + secondStart;
    res = mergeAlternately(word1.slice(1),word2.slice(1));  // '' c , c 
    
    return merged + res; 
    

};