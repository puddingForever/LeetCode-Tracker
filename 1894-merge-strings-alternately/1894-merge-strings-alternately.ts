function mergeAlternately(word1 : string, word2 : string) {
        if(word1.length > 0 && word2.length === 0){
        return word1;
    }else if(word1.length === 0 && word2.length > 0){
        return word2;
    }else if(word1.length === 1 && word2.length === 1){
        return word1 + word2;
    }else if(word1.length > 0 && word2.length > 0){
        return word1[0] + word2[0] + mergeAlternately(word1.slice(1), word2.slice(1))
    }
};