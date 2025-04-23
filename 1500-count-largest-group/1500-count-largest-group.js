/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {

    // store in obj 
    const dataObj = {};

    // 1. split and sum 
    // key is sum , increment cnt++
    for(let i=1; i<=n; i++){
        let sum = String(i).split("").reduce((acc,cur) => Number(acc) + Number(cur) , 0);
        dataObj[sum] = dataObj[sum] === undefined ? 1 : ++dataObj[sum];
    }
    let result = 0;
    // 2.count largest cnt 
    let arr = Object.values(dataObj)
    let max = Math.max(...arr);
    Object.values(dataObj).reduce((acc,curr) => { 
                                                    if(max === curr) result = result + 1; 
                                                    return result   
                                                } ,result);

    return result;
};