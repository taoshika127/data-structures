class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.enqueued = 0;
    this.dequeued = 0;
  }

  enqueue(value) {
    this.storage[this.enqueued] = value;
    this.enqueued ++;
  }

  dequeue() {
    if (this.dequeued >= this.enqueued) {
      return undefined;
    }
    var dequeuedItem = this.storage[this.dequeued];
    delete this.storage[this.dequeued];
    this.dequeued++;
    return dequeuedItem;
  }

  size() {
    return this.enqueued - this.dequeued;
  }
}

var newQueue = new Queue();
