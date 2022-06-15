var GraphNode = function(value) {
  this.value = value;
  this.edge = [];
};

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = new GraphNode(node);
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    for (var k = 0; k < this.nodes.length; k ++) {
      if (this.nodes[k].value === node) {
        var index = k;
        this.nodes.splice(k, 1);
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === fromNode) {
        var from = this.nodes[i];
        for (var k = 0; k < from.edge.length; k++) {
          if (from.edge[k].value === toNode) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === fromNode) {
        var from = this.nodes[i];
      }
      if (this.nodes[i].value === toNode) {
        var to = this.nodes[i];
      }
    }
    from.edge.push(to);
    to.edge.push(from);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    for (var i = 0; i < this.nodes.length; i++) {
      if (this.nodes[i].value === fromNode) {
        var from = this.nodes[i];
      }
      if (this.nodes[i].value === toNode) {
        var to = this.nodes[i];
      }
    }
    from.edge.splice(from.edge.findIndex(function(x) { return x.value === toNode; }), 1);
    to.edge.splice(to.edge.findIndex(function(x) { return x.value === fromNode; }), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value);
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
.forEachNode() : O(n)
 */


