function isAnagram(s: string, t: string): boolean {
     if(s.length !== t.length) return false;

     var obj = {};
     for(let i=0; i<s.length; i++){
         obj[s[i]] = ( obj[s[i]] || 0 ) + 1;
     }

     for(let j=0; j<t.length; j++){
        if(!obj[t[j]] || obj[t[j]] === 0) return false;

        if(obj[t[j]]){
            obj[t[j]] = obj[t[j]] - 1;
        }
     }

     return true;
};