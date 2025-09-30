function fib(n: number ): number {
       let fibarray = [];
       fibarray[0] = 0;
       fibarray[1] = 1;
       for(let i=2; i<=n; i++){ // fib(2) = 1 , fib(3) = fib(2) + fib(1)
        fibarray[i] = fibarray[i-1] + fibarray[i-2];
       }

       return fibarray[n];
};