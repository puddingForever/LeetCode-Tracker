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
        let digit = 0;
        while(read < chars.length && currentChar === chars[read]){
            read++;
            digit++; 
        }
        chars[write] = currentChar;
        write++;

        if(digit > 1){
            let digitArr = String(digit).split("");
            let i = 0;
            while(i < digitArr.length){
                chars[write] = digitArr[i]
                write++;
                i++;
            }
        }
      
    }

    return write;
};