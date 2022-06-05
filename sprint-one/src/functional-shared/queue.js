var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  storage = {};
  extend(obj, queueMethods);
  return obj;
};

var storage = {};

var extend = function (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
};

var queueMethods = {

  enqueue: function (value) {
    var size = queueMethods.size();
    storage[size] = value;
  },

  dequeue: function () {
    var dequeueElement = storage[0];
    for (var key in storage) {
      if (Number(key) > 0) {
        var newKey = Number(key) - 1;
        storage[newKey] = storage[key];
      }
    }
    delete storage[key];
    return dequeueElement;
  },

  size: function () {
    var size = 0;
    for (var key in storage) {
      size++;
    }
    return size;
  }
};


