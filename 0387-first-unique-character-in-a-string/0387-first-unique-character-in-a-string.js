/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  // store in obj 
  // { character : cnt++ }
  // character as a key , true 
  // for - loop 
  // find character that cnt is 1 

   const dataObj = {};
   for(let i=0; i<s.length; i++){
    dataObj[s[i]] = dataObj[s[i]] === undefined ? [1,i] : ++dataObj[s[i]][0];
   }

   const arr = Object.values(dataObj);
   for(let i=0; i<arr.length; i++){
    if(arr[i][0] === 1) return arr[i][1];
   }

   return -1;

};