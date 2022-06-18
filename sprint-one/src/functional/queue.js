var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var headIndex = 0;
  var tailIndex = 0;

  // Implement the methods below.
  someInstance.enqueue = function(value) {
    storage[tailIndex] = value;
    tailIndex ++;
  };

  someInstance.dequeue = function() {
    var removed = storage[headIndex];
    delete storage[headIndex];
    headIndex ++;
    return removed;
  };

  someInstance.size = function() {
    var queueSize = tailIndex - headIndex;
    if (queueSize < 0) {
      queueSize = 0;
    }
    return queueSize;
  };

  return someInstance;
};