function mergeAlternately(word1: string, word2: string): string {
    let res:string[] = [];
    
    for(let i=0; i<Math.max(word1.length, word2.length); i++){
        if(i < word1.length) res.push(word1[i]);
        if(i < word2.length) res.push(word2[i]);
    }

    return res.join("")
};