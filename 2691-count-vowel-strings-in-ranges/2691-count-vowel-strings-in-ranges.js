/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    
    var ans = new Array(queries.length);
    var mySet = new Set(['a','e','i','o','u']);
    var sum = 0;
    var prefixSum = new Array(words.length);

    for(var i=0; i<words.length; i++){
        var currentWord = words[i];

        if( mySet.has(currentWord.charAt(0)) && mySet.has(currentWord.charAt(currentWord.length-1)) ){
            sum++;
        }
        prefixSum[i] = sum;
    }

    for(var i=0; i<queries.length; i++){
        var currentQuery = queries[i];
        ans[i] = prefixSum[currentQuery[1]] - (currentQuery[0] === 0 ? 0 : prefixSum[currentQuery[0] - 1] );

    }
   
    return ans;
};

