class Queue {
  constructor() {
    this.items = []
  }
  enqueue(element){
    this.items.push(element)
  }
  dequeue(){
    // ! TODO: HAVE LINEAR TIME COMPLEXITY due to shift
    return this.items.shift()
  }
  isEmpty(){
    return this.items.length
  }
  peek(){
   if(!this.isEmpty()){
    return this.items[0]
   }
   return null

  }
  size(){
    return this.items.length
  }
  print(){
    console.log(this.items.toString());
  }
}

const queue = new Queue()
queue.enqueue(4)
queue.enqueue('fitma')
queue.enqueue('++')
queue.print()
console.log(queue);
queue.dequeue()
queue.dequeue()
console.log("after deletion",queue);
console.log(queue.size());