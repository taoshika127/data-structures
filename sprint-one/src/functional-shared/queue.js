var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
};

var queueMethods = {};
=======
  var newQueue = {};
  newQueue.storage = {};
  newQueue.headIndex = 0;
  newQueue.tailIndex = 0;

  _.extend(newQueue, queueMethods);
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


>>>>>>> 833792c9a8dc343dff8fc6f6f5676b31b74e7ead
