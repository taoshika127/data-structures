var Stack = function(storage) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count ++;
};

Stack.prototype.pop = function() {
  delete this.storage[this.count];
  this.count --;
  if (this.count < 0) {
    this.count = 0;
  }
  return this.storage[this.count];
};

Stack.prototype.size = function() {
  return this.count;
};

var newStack = new Stack();
