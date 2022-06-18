var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list._addToTail = function(value) {
    var newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  };

  list._removeHead = function() {
    if (this.head === null) {
      return undefined;
    } else {
      var first = this.head.value;
      this.head = this.head.next;
    }
    return first;
  };

  list._contains = function(target) {
    if (this.head === null) {
      return false;
    } else {
      var current = this.head;
      while (current !== null) {
        if (current.value === target) {
          return true;
        } else {
          current = current.next;
        }
      }
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
