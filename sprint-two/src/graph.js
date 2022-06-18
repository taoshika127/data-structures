var GraphNode = function(value) {
  this._value = value;
  this._edge = [];
};

// Instantiate a new graph
var Graph = function() {
  this._nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype._addNode = function(node) {
  var newNode = new GraphNode(node);
  this._nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype._contains = function(node) {
  for (var i = 0; i < this._nodes.length; i++) {
    if (this._nodes[i]._value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype._removeNode = function(node) {
  if (this._contains(node)) {
    for (var k = 0; k < this._nodes.length; k ++) {
      if (this._nodes[k]._value === node) {
        var index = k;
        this._nodes.splice(k, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype._hasEdge = function(fromNode, toNode) {
  if (this._contains(fromNode) && this._contains(toNode)) {
    for (var i = 0; i < this._nodes.length; i++) {
      if (this._nodes[i]._value === fromNode) {
        var from = this._nodes[i];
        for (var k = 0; k < from._edge.length; k++) {
          if (from._edge[k]._value === toNode) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype._addEdge = function(fromNode, toNode) {
  if (this._contains(fromNode) && this._contains(toNode)) {
    for (var i = 0; i < this._nodes.length; i++) {
      if (this._nodes[i]._value === fromNode) {
        var from = this._nodes[i];
      }
      if (this._nodes[i]._value === toNode) {
        var to = this._nodes[i];
      }
    }
    from._edge.push(to);
    to._edge.push(from);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype._removeEdge = function(fromNode, toNode) {
  if (this._contains(fromNode) && this._contains(toNode)) {
    for (var i = 0; i < this._nodes.length; i++) {
      if (this._nodes[i]._value === fromNode) {
        var from = this._nodes[i];
      }
      if (this._nodes[i]._value === toNode) {
        var to = this._nodes[i];
      }
    }
    from._edge.splice(from._edge.findIndex(function(x) { return x._value === toNode; }), 1);
    to._edge.splice(to._edge.findIndex(function(x) { return x._value === fromNode; }), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype._forEachNode = function(cb) {
  for (var i = 0; i < this._nodes.length; i++) {
    cb(this._nodes[i]._value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
.addNode() : O(1)
.contains() : O(n)
.removeNode() : O(n^2)
,hasEdge() : O(n^2) ??
.addEdge() : O(n)
.removeEdge() : O(n^2)
._forEachNode() : O(n)
 */


