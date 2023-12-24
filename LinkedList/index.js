class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  addToTail(data) {
    let newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
  }

  addAtPosition(data, position) {
    let newNode = new Node(data);
    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let i = 1;
    while (i < position - 1 && current) {
      current = current.next;
      i++;
    }
    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  remove(data) {
    if (!this.head) {
      return null;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      this.length--;
      return this;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        this.length--;
        return this;
      }
      current = current.next;
    }
    return null;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.remove();
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
    this.length--;
    return this;
  }

  printAll() {
   let current = this.head;
   let result = "";
 
   while (current) {
     result += current.data;
     if (current.next) {
       result += " --> ";
     }
     current = current.next;
   }
 
   console.log(result);
 }
}

// Create a new linked list
const list = new LinkedList();

// Add elements to the list
list.add('A');
list.add('B');
list.add('C');

console.log('====== Initial List ======');
list.printAll();

// Add elements to the tail
list.addToTail('D');
list.addToTail('E');

console.log('====== List after adding to the tail ======');
list.printAll();

// Insert elements at specific positions
list.addAtPosition('P', 2);
list.addAtPosition('Q', 4);

console.log('====== List after insertion at positions ======');
list.printAll();

// Remove an element by value
list.remove('B');

console.log("====== List after removing 'B' ======");
list.printAll();

// Remove an element at a specific index
list.removeAt(2);

console.log('====== List after removal at index 2 ======');
list.printAll();
