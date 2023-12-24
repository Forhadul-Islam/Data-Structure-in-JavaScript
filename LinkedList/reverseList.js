// 👍
const reverseListIterative = (head) => {
  let prev = null;
  let current = head;
  let next;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

// ❤️
const reverseListRecursive = (head, prev = null) => {
  if (head === null) return prev;

  const next = head.next;
  head.next = prev;

  return reverseListRecursive(next, head);
};
