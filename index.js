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

function  isBalancedParentheses(input){
    const stack1 = new Stack();
    const paraObj = {
        "(" : ")",
        "[" : "]",
        "{" : "}",
         }
         
         if((input[0] == "(" || input[0] == "{" || input[0] == "[") && input.length == 1){
             return false
         }
         
         
    for(let i = 0; i < input.length; i++){
        let char = input[i];
        if(char == "(" || char == "{" || char == "["){
            stack1.push(char);
        }
       else if(char == ")" || char == "}" || char == "]"){
           let top = stack1.pop();
           if(char !== paraObj[top]){
               return false
           }
       }
        
    }
    return stack1.isEmpty();
    
    
    
}

function reverseString(input){
    let stack1 = new Stack();
    let reversedString = "";
    
    for(let i = 0; i < input.length; i++){
            stack1.push(input[i]);
    }
    
    while(!stack1.isEmpty()){
        reversedString += stack1.pop();
    }
    return reversedString;
}

let stack1 = new Stack(11);
stack1.push(12);
stack1.push(13);
stack1.push(14);
stack1.pop();
console.log(stack1);

