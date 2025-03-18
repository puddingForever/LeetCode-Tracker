/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
        let original = init;
        let result = init;
    return {
        increment : () => ++result,
        decrement : () => --result,
        reset : () => { result = init; return result; }   
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */