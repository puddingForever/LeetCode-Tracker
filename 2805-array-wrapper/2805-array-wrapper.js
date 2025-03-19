/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.array = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    
    if(this.length === 0) return this.length;
    let sum = this.array.reduce((acc,curr) => {return acc += curr},0)
    return sum;
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return JSON.stringify(this.array)
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */