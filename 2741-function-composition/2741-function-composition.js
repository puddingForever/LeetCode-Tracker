/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        if(functions.length === 0) return x;
        
        let result = functions.reduceRight((acc,curr) => {
            return acc = curr(acc);  
        },x)

        return result;

    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */