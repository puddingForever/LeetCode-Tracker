function mergeAlternately(word1: string, word2: string): string {

    if(word1.length === 1 && word2.length === 1){
        return word1[0] + word2[0];
    }else if(word1.length > 0 && word2.length === 0){
        return word1;
    }else if(word2.length > 0 && word1.length === 0){
        return word2;
    }

    let firstChar = word1[0];
    let secondChar = word2[0];
    let merged = firstChar + secondChar;
    let res = mergeAlternately(word1.substr(1), word2.substr(1));
    return merged + res;

};