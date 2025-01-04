/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {

    var cnt = 0;

   for(var key in obj){
        cnt++;
   }

   return cnt === 0 ? true : false;
};