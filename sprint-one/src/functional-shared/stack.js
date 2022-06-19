var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // Strategy - newStack, count, storage
  var newStack = {};
  newStack.count = 0;
  newStack.storage = {};

  _.extend(newStack, stackMethods);
  return newStack;
};

// Enter stack methods using
var stackMethods = {
  push: function(val) {
    this.storage[this.count] = val;
    this.count++;
  },

  pop: function() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var popped = this.storage[this.count];
    delete this.storage[this.count];
    return popped;
  },

  size: function() {
    return this.count;
  }
};



