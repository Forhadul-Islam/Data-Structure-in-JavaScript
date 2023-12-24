// Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//create node
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

//link the nodes
a.next = b;
b.next = c;
c.next = d;

//travarse the list
const printLinkedList = (head) => {
  let listView = ``;
  let curr = head;
  while (curr !== null) {
    listView += `${curr.value} --> `;
    curr = curr.next
  }
  listView += "Null"
  console.log(listView);
};

//travarse using recursion
// const printLinkedList = (head) => {
//   if (head === null) return;
//   console.log(head.value);
//   return printLinkedList(head.next);
// };

//print list
printLinkedList(a);
