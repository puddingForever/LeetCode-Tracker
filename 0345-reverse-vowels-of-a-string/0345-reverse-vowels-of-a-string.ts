function reverseVowels(s: string): string {

     let arr = [];
    let str = "";
    for(let i=0; i<s.length; i++){
        let singleChar = s[i].toLowerCase();
        if(singleChar === 'a' ||
           singleChar === 'e' ||
          singleChar === 'i' ||
          singleChar === 'o' ||
          singleChar === 'u'){
            arr.push(s[i]);
          }
    }


    for(let i=0; i<s.length; i++){
        let singleChar = s[i].toLowerCase();
        if(singleChar === 'a' ||
           singleChar === 'e' ||
          singleChar === 'i' ||
          singleChar === 'o' ||
          singleChar === 'u'){
              str += arr.pop();
          }else{
            str += s[i];
          }
    }
    
    
    return str;
    
    
};