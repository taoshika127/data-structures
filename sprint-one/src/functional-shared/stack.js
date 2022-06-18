var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
<<<<<<< HEAD
};

var stackMethods = {};
=======

  // Strategy - newStack, count, storage
  var newStack = {};
  newStack.count = 0;
  newStack.storage = {};

  _.extend(newStack, stackMethods);
  return newStack;
};

// Enter stack methods using
var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count ++;
  },
  pop: function() {
    delete this.storage[this.count];
    this.count --;
    if (this.count < 0) {
      this.count = 0;
    }
    return this.storage[this.count];
  },
  size: function() {
    return this.count;
  }
};



>>>>>>> 833792c9a8dc343dff8fc6f6f5676b31b74e7ead
