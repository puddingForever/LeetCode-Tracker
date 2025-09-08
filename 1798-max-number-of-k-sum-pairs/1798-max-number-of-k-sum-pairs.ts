function maxOperations(nums: number[], k: number): number {
   let map = new Map();
    let res = 0;

    for (let num of nums) {
        let target = k - num;
        if (map.get(target) > 0) {
            res++;
            map.set(target, map.get(target) - 1);
        } else {
            map.set(num, (map.get(num) || 0) + 1);
        }
    }
    return res;
};