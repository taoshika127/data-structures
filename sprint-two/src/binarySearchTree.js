var BinarySearchTree = function(value) {
  var tree = Object.create(BSTMethods);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree;
};

var BSTMethods = {
  insert: function(val) {
    if (!this.value) {
      this.value = val;
    }
    if (this.value === val) {
      return;
    }
    if (this.value < val) {
      if (this.right === null) {
        this.right = BinarySearchTree(val);
      } else {
        this.right.insert(val);
      }
    }
    if (this.value > val) {
      if (this.left === null) {
        this.left = BinarySearchTree(val);
      } else {
        this.left.insert(val);
      }
    }
  },

  contains: function(val) {
    if (this.value === null) {
      return false;
    }
    if (this.value === val) {
      return true;
    }
    if (this.left === null && this.right === null) {
      return false;
    }
    if (this.value < val) {
      return this.right.contains(val);
    }
    if (this.value > val) {
      return this.left.contains(val);
    }
  },

  depthFirstLog: function(cb) {
    cb(this.value);
    if (this.left) {
      this.left.depthFirstLog(cb);
    }
    if (this.right) {
      this.right.depthFirstLog(cb);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
insert: O(log n)
contains: O(log n)
depthFirstLog: O(n)

 */
