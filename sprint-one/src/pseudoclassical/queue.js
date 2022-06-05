var Queue = function(storage) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  storage = storage || {};
  this.storage = storage;
};

Queue.prototype.enqueue = function (value) {
  var size = this.size();
  this.storage[size] = value;
};

Queue.prototype.dequeue = function () {
  var storage = this.storage;
  var dequeueElement = storage[0];
  for (var key in storage) {
    if (Number(key) > 0) {
      var newKey = Number(key) - 1;
      storage[newKey] = storage[key];
    }
  }
  delete storage[key];
  return dequeueElement;
};

Queue.prototype.size = function () {
  var size = 0;
  var storage = this.storage;
  for (var key in storage) {
    size++;
  }
  return size;
};


