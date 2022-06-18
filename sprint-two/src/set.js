var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype._add = function(item) {
  if (!this._storage.hasOwnProperty(item)) {
    this._storage[item] = item;
  }

};

setPrototype._contains = function(item) {
  return this._storage.hasOwnProperty(item);
};

setPrototype._remove = function(item) {
  if (this._contains(item)) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
.add: O(1);
.contains: O(1);
.remove: O(1);
 */
