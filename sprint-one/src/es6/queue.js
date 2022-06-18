class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
<<<<<<< HEAD
  }

}
=======
    this.storage = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(value) {
    this.storage[this.tailIndex] = value;
    this.tailIndex ++;
  }

  dequeue() {
    var returned = this.storage[this.headIndex];
    delete this.storage[this.headIndex];
    this.headIndex ++;
    return returned;
  }

  size() {
    var queueSize = this.tailIndex - this.headIndex;
    if (queueSize < 0) {
      queueSize = 0;
    }
    return queueSize;
  }
}

var newQueue = new Queue();
>>>>>>> 833792c9a8dc343dff8fc6f6f5676b31b74e7ead
