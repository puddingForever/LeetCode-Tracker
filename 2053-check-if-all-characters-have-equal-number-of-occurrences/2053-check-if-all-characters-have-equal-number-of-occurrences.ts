function areOccurrencesEqual(s: string): boolean {

    const obj = {};

    for(let i=0; i<s.length; i++){
        obj[s[i]] = ( obj[s[i]] || 0 ) + 1;        
    }

    return new Set(Object.values(obj)).size === 1;
};