

// Instantiate a new graph
var Graph = function() {
  //var obj = Object.create(objMethods) objectCreator is not here
  this.value = 0;
  this.edges = [];        
  this.storage = [];

  //returns object 
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // push value to the storage array  
  this.value = node;
  this.storage.push(this.value); 
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  //Determine if the array or object contains a given value
  return _.include(this.storage, node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // store in var indexOfNode the index of the the node that need to be
  var indexOfNode = this.storage.indexOf(node);
  // at index of var indexOfNode remove 1 item
  this.storage.splice(indexOfNode, 1);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //input: a fromNode and a toNode
  //boolean if our edge array has a length. 
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // connect one value to another and for that value,edges.push(toNode and fromNode)
  // access storage array
  // find fromNode value --> push toNode to its edges array
  // find toNode value --> push fromNode to its edges array
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var myGraph = new Graph();
myGraph.addNode(5);
myGraph.addNode(4);
myGraph.addEdge(5, 4);
myGraph.contains(4); //outputs true; 

 