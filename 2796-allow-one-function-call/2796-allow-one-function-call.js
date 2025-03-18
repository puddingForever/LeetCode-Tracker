/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    
    let isCalled = false;

    return function(...args){
        if(isCalled) return undefined;
        let result = fn(...args);
        isCalled = true;

        return result;
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
