type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
  let result = 0;
       await promise1.then(value => result = value ) 
       await promise2.then(value => result += value) 

       return result; 
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */