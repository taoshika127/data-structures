var Queue = function(storage) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.headIndex = 0;
  this.tailIndex = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.tailIndex] = value;
  this.tailIndex ++;
};

Queue.prototype.dequeue = function() {
  var returned = this.storage[this.headIndex];
  delete this.storage[this.headIndex];
  this.headIndex ++;
  return returned;
};

Queue.prototype.size = function() {
  var queueSize = this.tailIndex - this.headIndex;
  if (queueSize < 0) {
    queueSize = 0;
  }
  return queueSize;
};

var newStack = new Queue();




