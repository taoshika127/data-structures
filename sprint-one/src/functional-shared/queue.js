var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.enqueued = 0;
  newQueue.dequeued = 0;

  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.enqueued] = value;
    this.enqueued ++;
  },
  dequeue: function() {
    if (this.dequeued >= this.enqueued) {
      return undefined;
    }
    var dequeuedItem = this.storage[this.dequeued];
    delete this.storage[this.dequeued];
    this.dequeued++;
    return dequeuedItem;
  },
  size: function() {
    return this.enqueued - this.dequeued;
  }
};


