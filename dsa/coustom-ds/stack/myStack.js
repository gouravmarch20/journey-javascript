class Stack {
  constructor() {
    this.items = [];
  }
  push(element) {
    return this.items.push(element);
  }
  pop() {
    return this.items.pop();
  }
  //** allow to see top most element
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }
}

const stack = new Stack();
console.log(stack.isEmpty());
stack.push(20)
stack.push(10)
stack.push(70)
console.log(stack.size());
stack.print()
console.log(stack.pop());
console.log(stack.peek()); 