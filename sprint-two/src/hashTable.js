

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var keyValuePair = [k, v];
  var bucket = this._storage.get(index);
  var doubleKey = false;
  if (!bucket) {
    bucket = [];
  }
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      doubleKey = true;
    }
  }
  if (!doubleKey) {
    bucket.push(keyValuePair);
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i] && bucket[i][0] === k) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === k) {
        bucket[i] = undefined;
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert, retrieve, remove: ideally O(1) but rarely O(n) for worst case where all elements are at the same index(bucket);

 */


