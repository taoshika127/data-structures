var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.enqueued = 0;
  this.dequeued = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.enqueued] = value;
  this.enqueued ++;
};

Queue.prototype.dequeue = function() {
  if (this.dequeued >= this.enqueued) {
    return undefined;
  }
  var dequeuedItem = this.storage[this.dequeued];
  delete this.storage[this.dequeued];
  this.dequeued++;
  return dequeuedItem;
};

Queue.prototype.size = function() {
  return this.enqueued - this.dequeued;
};





