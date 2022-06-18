class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count ++;
  }

  pop() {
    delete this.storage[this.count];
    this.count --;
    if (this.count < 0) {
      this.count = 0;
    }
    return this.storage[this.count];
  }

  size() {
    return this.count;
  }
}

var newStack = new Stack();
