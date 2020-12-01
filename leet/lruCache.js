const Node = function (val, key, next, prev) {
  this.val = val;
  this.key = key;
  this.next = next ? next : null;
  this.prev = prev ? prev : null;
};
const LRUCache = function (capacity) {
  this.head = null;
  this.tail = null;
  this.size = 0;
  this.capacity = capacity;
  this.hash = {};
  // hash = {nodePoint: Node}
};

/*
 * @param {number} key
 * @return {number}
 */

Node.prototype.splicer = function () {
  if (this.next) {
    this.next.prev = this.prev;
  }
  if (this.prev) {
    this.prev.next = this.next;
  }

  this.next = null;
  this.prev = null;
};

LRUCache.prototype.update = function (key) {
  if (this.hash[key] === this.head) return;
  if (this.hash[key].next === null && this.hash[key].prev !== null) {
    this.tail = this.hash[key].prev;
  }
  this.hash[key].splicer();
  this.hash[key].next = this.head;
  this.head.prev = this.hash[key];
  this.head = this.hash[key];
  if (this.size === 2) {
    this.tail.prev = this.head;
  }
};

LRUCache.prototype.get = function (key) {
  if (this.hash[key]) {
    this.update(key);

    return this.hash[key].val;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.hash[key]) {
    //update the by hash[key].nodePointer.val = value
    this.hash[key].val = value;
    this.update(key);
    //use the pointer and move it to the front of the list
  } else {
    this.hash[key] = new Node(value, key, this.head);
    this.head === null
      ? (this.tail = this.hash[key])
      : (this.head.prev = this.hash[key]);
    this.head = this.hash[key];
    this.size++;
    if (this.size > this.capacity) {
      this.tail = this.tail.prev;
      delete this.hash[this.tail.next.key];
      this.tail.next = null;
      this.size--;
    }
  }
};
//below are some tests I was running before turning it in
// Your LRUCache object will be instantiated and called as such:
// var obj = new LRUCache(3);
// obj.put(1, 1);
// obj.put(2, 2);
// obj.put(3, 3);
// obj.put(4, 4);
// // for (i in obj.hash) {
// //   console.log(`value: ${obj.hash[i].val}`);
// //   console.log(`next: ${obj.hash[i].next ? obj.hash[i].next.val : obj.hash[i].next}`);
// //   console.log(`prev: ${obj.hash[i].prev ? obj.hash[i].prev.val : obj.hash[i].prev}`);
// //   console.log('');
// // }
// obj.get(4);
// for (i in obj.hash) {
//   console.log(`value: ${obj.hash[i].val}`);
//   console.log(
//     `next: ${obj.hash[i].next ? obj.hash[i].next.val : obj.hash[i].next}`
//   );
//   console.log(
//     `prev: ${obj.hash[i].prev ? obj.hash[i].prev.val : obj.hash[i].prev}`
//   );
//   console.log('');
// }
// obj.get(3);
// for (i in obj.hash) {
//   console.log(`value: ${obj.hash[i].val}`);
//   console.log(
//     `next: ${obj.hash[i].next ? obj.hash[i].next.val : obj.hash[i].next}`
//   );
//   console.log(
//     `prev: ${obj.hash[i].prev ? obj.hash[i].prev.val : obj.hash[i].prev}`
//   );
//   console.log('');
// }
// obj.get(2);
// obj.get(1);
// obj.put(5, 5);
// for (i in obj.hash) {
//   console.log(`value: ${obj.hash[i].val}`);
//   console.log(
//     `next: ${obj.hash[i].next ? obj.hash[i].next.val : obj.hash[i].next}`
//   );
//   console.log(
//     `prev: ${obj.hash[i].prev ? obj.hash[i].prev.val : obj.hash[i].prev}`
//   );
//   console.log('');
// }