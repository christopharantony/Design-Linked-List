const MyLinkedList = function () {
  this.head = null;
  this.tail = null;
  this.length = 0;
};

const Node = function ({ val = null, prev = null, next = null }) {
  this.val = val;
  this.prev = prev;
  this.next = next;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const newNode = new Node({ val, next: this.head });
  this.head = newNode;

  if (this.length === 0) {
    this.tail = newNode;
  } else {
    this.head.next.prev = this.head;
  }

  this.length++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node({ val, prev: this.tail });
  this.tail = newNode;

  if (this.length === 0) {
    this.head = newNode;
  } else {
    this.tail.prev.next = this.tail;
  }

  this.length++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {};

// Your MyLinkedList object will be instantiated and called as such:
const obj = new MyLinkedList();
// var param_1 = obj.get(index)
// obj.addAtHead(val);
// obj.addAtTail(val)
// obj.addAtIndex(index,val)
// obj.deleteAtIndex(index)

// Test space

obj.addAtHead(1);
obj.addAtHead(2);
obj.addAtHead(3);
obj.addAtTail(0);

if (obj.length) {
  // Ascending iterator
  console.log("Asc ==>");
  let i = { ...obj.head };
  while (i.next) {
    console.log(i.val);
    i = i.next;
  }
  console.log(i.val);

  // Descending iterator
  console.log("Desc ==>");
  let j = { ...obj.tail };
  while (j.prev) {
    console.log(j.val);
    j = j.prev;
  }
  console.log(j.val);
} else {
  console.log("--- Empty List ---");
}
