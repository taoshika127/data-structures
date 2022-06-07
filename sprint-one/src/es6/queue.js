class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage) {
    storage = storage || {};
    this.storage = storage;
  }

  enqueue (value) {
    var storage = this.storage;
    var size = this.size();
    storage[size] = value;
  }

  dequeue () {
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
  }

  size () {
    var size = 0;
    var storage = this.storage;
    for (var key in storage) {
      size++;
    }
    return size;
  }

}
