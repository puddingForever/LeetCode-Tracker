function areOccurrencesEqual(s: string): boolean {

    const obj = {};

    for(let i=0; i<s.length; i++){
        obj[s[i]] = ( obj[s[i]] || 0 ) + 1;        
    }

    let prev:undefined | number = undefined;

    for(let key in obj){
        let val:number = obj[key];
        if(prev && prev !== val ) return false;
        prev = val;
    }



    return true;
};