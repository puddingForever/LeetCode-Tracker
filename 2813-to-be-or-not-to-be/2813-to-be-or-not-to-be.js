/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    return {
        x : val,
        toBe : function(key){
            if(this.x !== key){
                throw new Error('Not Equal');
            }
            return true;
        },
        notToBe : function(key){
            if(this.x === key){
                throw new Error('Equal');
            }
            return true;
        }

    }

};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */