var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageLength = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    var previousElement = storage[0];
    for (var key in storage) {
      var newKey = Number(key) + 1;
      [storage[newKey], previousElement] = [previousElement, storage[newKey]];
    }
    storage[0] = value;
  };

  someInstance.pop = function() {
    var popElement = storage[0];
    for (var key in storage) {
      if (Number(key) > 0) {
        var newKey = Number(key) - 1;
        storage[newKey] = storage[key];
      }
    }
    delete storage[key];
    return popElement;
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
