var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.headIndex = 0;
  newQueue.tailIndex = 0;

  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tailIndex] = value;
    this.tailIndex ++;
  },
  dequeue: function() {
    var removed = this.storage[this.headIndex];
    delete this.storage[this.headIndex];
    this.headIndex ++;
    return removed;
  },
  size: function() {
    var queueSize = this.tailIndex - this.headIndex;
    if (queueSize < 0) {
      queueSize = 0;
    }
    return queueSize;
  }
};


