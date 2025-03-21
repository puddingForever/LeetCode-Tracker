/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {

    return this.reduce((group,curr) => {

        const key = fn(curr);

        if(!group[key]){
            group[key] = [];
        }

        group[key].push(curr);

        return group;
    },{})

};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */