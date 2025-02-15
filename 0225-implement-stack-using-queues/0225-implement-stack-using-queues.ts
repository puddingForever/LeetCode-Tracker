class MyStack {

    private queue1 :  MyQueue;
    private queue2 :  MyQueue;

    constructor() {
        this.queue1 = new MyQueue;
        this.queue2 = new MyQueue;
    }

    push(x: number): void {
        this.queue1.enqueue(x);
    }

    pop(): number {
        while(this.queue1.size() > 1){
            this.queue2.enqueue(this.queue1.dequeue());
        }

        var poppedElement = this.queue1.dequeue();
        
        while(!this.queue2.isEmpty()){
            this.queue1.enqueue(this.queue2.dequeue());
        }

        return poppedElement;
       
    }

    top(): number {
       while(this.queue1.size() > 1){
            this.queue2.enqueue(this.queue1.dequeue());
        }

        var poppedElement = this.queue1.peek();
        this.queue2.enqueue(this.queue1.dequeue()); // remove laste element and insert it 
        
        while(!this.queue2.isEmpty()){
            this.queue1.enqueue(this.queue2.dequeue());
        }

        return poppedElement;
       
    }

    empty(): boolean {
        return this.queue1.isEmpty();
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
class MyQueue {
    private items: any[] = [];

    enqueue(item: any): void {
        this.items.push(item);
    }

    dequeue(): any | undefined {
        return this.items.shift();
    }

    peek(): any | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}

