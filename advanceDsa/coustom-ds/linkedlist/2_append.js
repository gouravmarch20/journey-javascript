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
  //* time : O(n)
  append (value) {
    const node = new Node (value);
    // empty case
    if (this.isEmpty ()) {
      this.head = node;
    } else {
      //* not empty case
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
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
list.prepend ('hii');
list.prepend ('i ');
list.append ('gourav');
console.log (list);
list.print ();
