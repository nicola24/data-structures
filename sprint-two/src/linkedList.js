var LinkedList = function() {
  debugger;
  //Create an empty list
  var list = {};
  list.head = null;
  list.tail = null; 
  

  list.addToTail = function(value) {
    //takes value and adds it to the end of the list 
    
    // this is now an object 
    var newNode = Node(value); 
    if (!list.head) { //indicates an empty list
    
    //list.head needs to be assigned to this object 
      this.head = newNode; 
    
      //list.tail needs to be assinged to this object
      this.tail = newNode;
    } else { // if list is not empty
      // reasigned tail to new node
      this.tail = newNode;
    }  
  };

  list.removeHead = function() {
    //removes the first node and returns its value 
    if (list.head.next) {
      var result = list.head;
      delete list.head;
    }
    return result;
  };

  list.contains = function(target) {
    //returns boolean reflecting whether or not the linked list 
    //contains the target
    
    
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
