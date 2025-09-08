function getNoZeroIntegers(n: number): number[] {
     let rest = n;
    for(let i = 1; i<n; i++){
        let front = rest - i;  // 1 
        rest = rest - front; // 1 
        if(String(front).indexOf("0") === -1 && 
           String(rest).indexOf("0") === -1){
            return [rest,front]
        }

        rest = n; // 1 
    }
};