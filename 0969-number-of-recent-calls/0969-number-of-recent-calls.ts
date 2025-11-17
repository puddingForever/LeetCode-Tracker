class RecentCounter {
     
    private queue : number[];

    constructor() {
        this.queue = []; 
        //  100 , 3100 , 3002
    }

    ping(t: number): number {
        let period = [(t-3000),t];
        this.queue.push(t);
     
        while(this.queue[0] < period[0]){
           this.queue.shift();
        }

        return this.queue.length;
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */