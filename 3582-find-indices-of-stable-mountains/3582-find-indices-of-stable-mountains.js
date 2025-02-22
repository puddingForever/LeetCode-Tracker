/**
 * @param {number[]} height
 * @param {number} threshold
 * @return {number[]}
 */
var stableMountains = function(height, threshold) {

/*
 height =
[1,2,3,4,5]
threshold =
2
Output
[4,5]
Expected
[3,4]
*/
  const res = [];

  for(let i=1; i<height.length; i++){
    if(height[i-1] > threshold){
        res.push(i);
    }
  }
 
  return res;

};