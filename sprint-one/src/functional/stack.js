var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
<<<<<<< HEAD
=======
  var count = 0;
>>>>>>> 833792c9a8dc343dff8fc6f6f5676b31b74e7ead

  // Implement the methods below.
  someInstance.push = function(value) {
<<<<<<< HEAD
  };

  someInstance.pop = function() {
  };

  someInstance.size = function() {
=======
    storage[count] = value;
    count ++;
  };

  someInstance.pop = function() {
    delete storage[count];
    count --;
    if (count < 0) {
      count = 0;
    }
    return storage[count];
  };

  someInstance.size = function() {
    return count;
>>>>>>> 833792c9a8dc343dff8fc6f6f5676b31b74e7ead
  };

  return someInstance;
};