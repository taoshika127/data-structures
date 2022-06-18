var BinarySearchTree = function(value) {
  var tree = Object.create(BSTMethods);
  tree._value = value;
  tree._left = null;
  tree._right = null;
  return tree;
};

var BSTMethods = {
  _insert: function(val) {
    if (!this._value) {
      this._value = val;
    }
    if (this._value === val) {
      return;
    }
    if (this._value < val) {
      if (this._right === null) {
        this._right = BinarySearchTree(val);
      } else {
        this._right._insert(val);
      }
    }
    if (this._value > val) {
      if (this._left === null) {
        this._left = BinarySearchTree(val);
      } else {
        this._left._insert(val);
      }
    }
  },

  _contains: function(val) {
    if (this._value === null) {
      return false;
    }
    if (this._value === val) {
      return true;
    }
    if (this._left === null && this._right === null) {
      return false;
    }
    if (this._value < val) {
      return this._right._contains(val);
    }
    if (this._value > val) {
      return this._left._contains(val);
    }
  },

  _depthFirstLog: function(cb) {
    cb(this._value);
    if (this._left) {
      this._left._depthFirstLog(cb);
    }
    if (this._right) {
      this._right._depthFirstLog(cb);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
_insert: O(log n)
_contains: O(log n)
_depthFirstLog: O(n)

 */
