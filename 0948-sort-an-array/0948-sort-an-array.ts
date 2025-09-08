function sortArray(nums: number[]): number[] {
    if(nums.length <=1) return nums;
    const mid = Math.floor(nums.length/2);
    const left = sortArray(nums.slice(0,mid));
    const right = sortArray(nums.slice(mid));
    return merge(left,right)
};


function merge(arr1:number[],arr2:number[]) : number[] {
     let i = 0;
     let j = 0;
     const res = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] <= arr2[j]){
            res.push(arr1[i]);
            i++;
        }else{
            res.push(arr2[j]);
            j++
        }
    }


    return res.concat(arr1.slice(i)).concat(arr2.slice(j))
}

