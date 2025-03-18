/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
   //arr = [1,9,6,3,2], size = 3
   // [[1,9,6],[3,2]]
  const chunkedArray = [];

  for(let i=0; i<arr.length; i+=size){
    chunkedArray.push(arr.slice(i,i+size));
  }
  return chunkedArray;
};
