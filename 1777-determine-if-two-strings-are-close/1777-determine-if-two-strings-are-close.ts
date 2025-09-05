function closeStrings(word1: string, word2: string): boolean {
  // alphabets should be same 
    // number of occurrence should be same 

    // map에 저장 
    // 둘의 size가 다르거나 , every를 했을 때 겹치는게 없으면 false 

    // map.values()를 해서 sort 후, 둘의 값이 다르면 false 
    const myMap1 = word1.split("").reduce((acc,curr) => acc.set(curr, (acc.get(curr) || 0) + 1)
                                          ,new Map<string,number>());
    const myMap2 = word2.split("").reduce((acc,curr) => acc.set(curr, (acc.get(curr) || 0) + 1)
                                          ,new Map<string,number>());


    if(myMap1.size !== myMap2.size || 
       ![...myMap1.keys()].every(num => myMap2.get(num))){
        return false;
    }

   const only1 = [...myMap1.values()].sort();
   const only2 = [...myMap2.values()].sort();
    
   return only1.every((num,i) => num === only2[i])
}
