function closeStrings(word1: string, word2: string): boolean {
 
    // 1. check if alphabets are same 
    let arr1 = word1.split("");
    let arr2 = word2.split("");
    const mySet1 = new Set(arr1); 
    const mySet2 = new Set(arr2);
    
    const filterChars = arr2.filter(chr => !mySet1.has(chr));
    const filterChars0 = arr1.filter(chr => !mySet2.has(chr));

    if(filterChars.length > 0 || filterChars0.length > 0){
        return false;
    }

    // 2. check if number of occurances are same 
    let obj1: Record<string,number> = {};
    let obj2: Record<string,number> = {};

    for(let i=0; i<arr1.length; i++){
        obj1[arr1[i]] =  (obj1[arr1[i]] || 0 ) + 1
    }

     for(let i=0; i<arr2.length; i++){
        obj2[arr2[i]] =  (obj2[arr2[i]] || 0 ) + 1
    }
    
    const fren1 = Object.values(obj1).sort((a,b) => a-b);
    const fren2 = Object.values(obj2).sort((a,b) => a-b);

    for(let i=0; i<fren1.length; i++){
        if(fren1[i] !== fren2[i]) return false;
    }

    return true;
};