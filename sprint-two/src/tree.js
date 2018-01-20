var Tree = function(value) {

  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];// fix me
  //children property, an array containing a number of subtrees
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {
  addChild: function(value) {
  //takes any value, sets that as the target of a node, 
  //and adds that node as a child of the tree
    var newChild = Tree(value); //setting value of new node as input value
    this.children.push(newChild); 

  },

  contains: function(target) {
    console.log(`we are looking for ${target}`);
  //takes any input and returns a boolean 
  //reflecting whether it can be found as the value of the target node or any descendant node
  //iterate through on the parent (object) level and search for value 
  //iterate through on the children (array) level and search for value
    //if value === target return true ..base case 
    //needs to be done recursively
    var returner = false;
    var recurser = function(currentNode) {
      if (currentNode.value === target) {
        returner = true;
      } else {
        for (var i = 0; i < currentNode.children.length; i++) {
          recurser(currentNode.children[i]);
        }
      }
    };
    recurser(this);
    return returner;
  }
};
    
  //   };

  //   for (var key in this.newTree) {
  //     if (this.newTree[key].value === target) {
  //       return true;          
  //     } 
  //   }
  //   for (var i = 0; i < this.children.length; i++) {
  //     if (this.children[i].value === target) {
  //       return true;      
  //     }   
  //   }
  //   return false;
  // }

// };




/*
 * Complexity: What is the time complexity of the above functions?
 */
