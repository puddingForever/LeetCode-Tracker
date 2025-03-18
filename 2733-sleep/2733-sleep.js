/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
   let myPromise = new Promise(resolve => setTimeout(resolve,millis) )

   return myPromise
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */