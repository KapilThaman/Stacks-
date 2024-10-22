//Here we will implement stack and some questions related to it .

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    constructor(value){
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value){
        const newNode = new Node(value);
        newNode.next =  this.top;
        this.top = newNode;
        this.length++;
        return this;
    }
    pop(){
        let temp = this.top;
        this.top = temp.next;
        temp = null;
        this.length--;
        return temp;
    }

}

let stack1 = new Stack(11);
stack1.push(12);
stack1.push(13);
stack1.push(14);
stack1.pop();
console.log(stack1);

