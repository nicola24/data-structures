
// Instantiate a new graph
var Graph = function() {
  //var obj = Object.create(objMethods) objectCreator is not here        
  this.storage = {};
  //returns object 
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // push value to the storage array  
  this.storage[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  //Determine if the array or object contains a given value
  return _.include(Object.keys(this.storage), node.toString());
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.storage[node];
  _.each(this.storage, function(item, key, collection) {
    for (var k in item) {
      if (Number(k) === node) {
        delete item[k];
      }
    }
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.storage[fromNode].hasOwnProperty(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // connect one value to another and for that value,edges.push(toNode and fromNode)
  // access storage array

  this.storage[fromNode][toNode] = true;
  this.storage[toNode][fromNode] = true;
  // find fromNode value in storage object --> push toNode to its edges array
 
  // find toNode value in storage object --> push fromNode to its edges array
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
 
  for (var key in this.storage) {
    cb(key); 
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


 