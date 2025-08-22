function isSubsequence(s: string, t: string): boolean {
    
    let cnt = 0;
    for(let i=0; i<t.length; i++){
        if(s[cnt] === t[i]) cnt++;
    }

    return cnt === s.length
};