/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
      if(chars.length === 1) return 1;
    let write = 0;
    let read = 0;
    while(read < chars.length){
        let currentChar = chars[read]; 
        let count = 0;

        while(read < chars.length && chars[read] === currentChar){
            read++; 
            count++; 
        }
        chars[write] = currentChar; 
        write++; 

        if(count > 1){
            for(let digit of String(count)){
                chars[write] = digit;
                write++;
            }
        }
    }

    return write;
};