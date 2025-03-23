/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
   
    return dfs(obj);
};

var dfs = function(obj){

   // check if addable 
   if(!obj) return false;
   // primitive values 
   if(typeof obj !== 'object') return obj;

   if(Array.isArray(obj)){
      const newArr = [];
      for(let i=0; i<obj.length; i++){
        const curr = obj[i];
        const subRes = dfs(curr);

        if(subRes){
            newArr.push(subRes);
        }
      }

      return newArr;
   }


   const newObj = {};

   for (const key in obj){
    const subRes = dfs(obj[key]);
    if(subRes) {
        newObj[key] = subRes;
    }
   }

   return newObj;

}