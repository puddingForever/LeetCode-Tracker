/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    var newMap = new Map();
    var firstArr = s.split("");

    for(var i=0; i<firstArr.length; i++){
        if(newMap.has(firstArr[i])){
            var cnt = newMap.get(firstArr[i]);
            newMap.set(firstArr[i],++cnt);
        }else{
            newMap.set(firstArr[i],1);
        }
    }

    var secondArr = t.split("");

    if(firstArr.length !== secondArr.length) return false;

    var result = true;
    for(var i=0; i<secondArr.length; i++){
        if(newMap.has(secondArr[i])){
            var cnt = newMap.get(secondArr[i]);
            newMap.set(secondArr[i],--cnt);
        }else if(!newMap.has(secondArr[i])){
           result = false;
           break;
        }
    }

   
    newMap.forEach(val => {
        if(val !== 0) result = false;
    })

    return result;

};