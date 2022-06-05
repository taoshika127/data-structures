var Stack = function(storage) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  storage = storage || {};
  this.storage = storage;
};

Stack.prototype.push = function (value) {
  var storage = this.storage;
  var previousElement = storage[0];
  for (var key in storage) {
    var newKey = Number(key) + 1;
    [storage[newKey], previousElement] = [previousElement, storage[newKey]];
  }
  storage[0] = value;
};

Stack.prototype.pop = function () {
  var storage = this.storage;
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

Stack.prototype.size = function () {
  var storage = this.storage;
  var size = 0;
  for (var key in storage) {
    size++;
  }
  return size;
};
