var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  storage = {};
  return obj;
};

var storage = {};

var stackMethods = {
  push: function (value) {
    var previousElement = storage[0];
    for (var key in storage) {
      var newKey = Number(key) + 1;
      [storage[newKey], previousElement] = [previousElement, storage[newKey]];
    }
    storage[0] = value;
  },

  pop: function () {
    var popElement = storage[0];
    for (var key in storage) {
      if (Number(key) > 0) {
        var newKey = Number(key) - 1;
        storage[newKey] = storage[key];
      }
    }
    delete storage[key];
    return popElement;
  },

  size: function () {
    var size = 0;
    for (var key in storage) {
      size++;
    }
    return size;
  }
};


