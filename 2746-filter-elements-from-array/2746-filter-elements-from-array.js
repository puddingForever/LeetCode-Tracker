/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {

   let result = [];

   for(let i=0; i<arr.length; i++){
       let isValid = fn(arr[i],i);
       if(isValid){
            result.push(arr[i]);
       }
   }

   return result;
    
};