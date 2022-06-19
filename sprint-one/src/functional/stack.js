var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  someInstance.push = function (val) {
    storage[count] = val;
    count++;
  };

  someInstance.pop = function () {
    if (count === 0) {
      return undefined;
    }
    count--;
    var popped = storage[count];
    delete storage[count];
    return popped;
  };

  someInstance.size = function() {
    return count;
  }

  return someInstance;
};