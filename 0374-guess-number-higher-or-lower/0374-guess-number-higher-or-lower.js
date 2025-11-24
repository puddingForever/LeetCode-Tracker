/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    var left = 0, right = n;
    
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let res = guess(mid);
        if(res === -1){ // my guess is higher than target
             right = mid - 1;
        }else if(res === 1){ // my guess is lower than target 
              left = mid + 1;
        }else if(res === 0){
            return mid;
        }
    }
};