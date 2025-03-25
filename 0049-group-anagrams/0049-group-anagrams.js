/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    var anagramGroups = {};

    for(let string of strs){
        let chars = Array.from(string);
        chars.sort();
        const canonical = chars.join('');

        if(anagramGroups.hasOwnProperty(canonical)){
            anagramGroups[canonical].push(string);
        }else{
            anagramGroups[canonical] = [string];
        }
    }

    return Object.values(anagramGroups);
};