class MyQueue {

    private stack1: Stack;
    private stack2: Stack; 

    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    push(x: number): void {
       this.stack1.push(x);
    }

    pop(): number {
        return this.stack1.popLikeQueue();
    }

    peek(): number {
        return this.stack1.peekLikeQueue();
    }

    empty(): boolean {
        return this.stack1.isEmpty()
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


 class Stack{

    private stackList : any[];

    constructor(){
        this.stackList = [];
    }

    isEmpty(){
        return this.stackList.length === 0;
    }

    push(value : any){
        this.stackList.push(value);
    }
   
   // returns the first element , normally we use pop... in normal stack 
    pop(){
        if(this.isEmpty()) return null;
        return this.stackList.pop();
    }
    // keep the element but show the latest element 
    peek(){
        if(this.isEmpty()) return null;
        return this.stackList[this.stackList.length - 1];
    }

    popLikeQueue(){
        if(this.isEmpty()) return null;
        return this.stackList.shift();
    }

    peekLikeQueue(){
        if(this.isEmpty()) return null;
        return this.stackList[0];
    }


 }