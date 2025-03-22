/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {

    const combinedArray = arr1.concat(arr2);
    const merged = {};

    combinedArray.forEach((obj) => {
        let key = obj.id;
        if(!merged[key]){
            merged[key] = {...obj};
        }else{
            merged[key] = { ...merged[key], ...obj};
        }
    })

    return Object.values(merged);
    
};