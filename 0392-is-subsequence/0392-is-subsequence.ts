function isSubsequence(s: string, t: string): boolean {
    
    let count = 0; // ab
    for(let i=0; i<t.length; i++){
        if(t[i] === s[count]){
            count++; 
        }
    }

    return s.length === count;
};