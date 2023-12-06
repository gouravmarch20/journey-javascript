class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor (value) {
    this.head = null;
    this.size = 0;
  }
  isEmpty () {
    return this.size === 0;
  }
  getSize () {
    return this.size;
  }
  //* O(1)
  prepend (value) {
    const node = new Node (value);
    if (this.isEmpty ()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print () {
    if (this.isEmpty ()) {
      console.log ('list is empty');
    } else {
      let curr = this.head;
      let listValues = '';
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log (listValues);
    }
  }
}

const list = new LinkedList ();
// console.log("list is empty", list.isEmpty());
// console.log("list is empty", list.getSize());
list.prepend (10);
list.prepend (20);
// list.prepend (30);
console.log (list);
list.print ();
