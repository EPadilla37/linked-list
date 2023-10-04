/** Node: node for a singly linked list. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */
class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  /** pop(): return & remove last item. */
  pop() {
    if (!this.head) throw new Error("List is empty");
    if (this.length === 1) {
      const val = this.head.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return val;
    }

    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    const val = this.tail.val;
    this.tail = current;
    this.tail.next = null;
    this.length--;
    return val;
  }

  /** shift(): return & remove first item. */
  shift() {
    if (!this.head) throw new Error("List is empty");
    const val = this.head.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.head = this.head.next;
      this.length--;
    }
    return val;
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Index is invalid");
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val;
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) throw new Error("Index is invalid");
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    current.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error("Index is invalid");
    if (idx === 0) {
      this.unshift(val);
      return;
    }
    if (idx === this.length) {
      this.push(val);
      return;
    }
    let newNode = new Node(val);
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */
  removeAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Index is invalid");
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    let current = this.head;
    for (let i = 0; i < idx - 1; i++) {
      current = current.next;
    }
    const val = current.next.val;
    current.next = current.next.next;
    this.length--;
    return val;
  }

  /** average(): return an average of all values in the list */
  average() {
    if (this.length === 0) return 0;
    let current = this.head;
    let sum = 0;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}

module.exports = LinkedList;