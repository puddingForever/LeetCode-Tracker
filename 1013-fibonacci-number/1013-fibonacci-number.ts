function fib(n: number): number {
        let memo = {};
        if(n <= 1) return n;
        memo[n] = fib(n-1) + fib(n-2);
        return memo[n];
};