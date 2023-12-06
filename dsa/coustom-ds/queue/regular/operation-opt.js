class Queue {
  constructor() {
    (this.items = {}), (this.rear = 0), (this.front = 0);
  }
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }
  isEmpty() {
    return this.rear - this.front === 0;
  }
  peek() {
    if (this.rear - this.front) {
      return this.items[this.front];
    }
    return null;
  }
  size() {
    return this.rear - this.front;
  }
  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
queue.enqueue(4);
queue.enqueue("fitma");
queue.enqueue("++");
console.log(queue);
queue.dequeue();
queue.dequeue();
console.log("after deletion", queue);
console.log("is empty", queue.isEmpty());
console.log(" peek response : ", queue.peek());
console.log(" size of object : ", queue.size());
queue.print();
