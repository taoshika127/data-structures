var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var size = someInstance.size();
    storage[size] = value;
  };

  someInstance.dequeue = function() {
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

  someInstance.size = function() {
    var size = 0;
    for (var key in storage) {
      size++;
    }
    return size;
  };

  return someInstance;
};
