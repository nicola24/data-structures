var LinkedList = function() {
  //Create an empty list
  var list = {};
  list.head = null;
  list.tail = null; 
  
  //takes value and adds it to the end of the list 
  list.addToTail = function(value) {
  
    // create a new Node object 
    var newNode = Node(value); 

    //indicates an empty list
    if (!list.head) { 
    
    //add head to the newNode object
      this.head = newNode; 
    
      //add tail to the NewNode object
      this.tail = newNode;

    // if list is not empty
    } else { 

      this.tail.next = newNode; //we reassign the next pointer to point to our newest node
      this.tail = newNode; // we designate our newest node as the tail 
    }  
  };

  //removes the first node and returns its value 
  list.removeHead = function() {
    var result = this.head; //store head in a variable
    var val = this.head.value; //store value of head in a variable
    this.head = this.head.next; //reassign the head pointer to next node
    delete result; // delete the head
    return val; // return the stored value of head
  };

  //returns boolean reflecting whether or not the linked list 
  //contains the target
  list.contains = function(target) {
    //we only can access a linked list via head or tail
    var node = this.head; 
    //so we declare a var for head to enter our list 
    while (node) {
    //set a conditional that while there is a node in our list  
      if (node.value === target) {
      //check if that node's value === target
        return true;
        // if it does, return true
      }
      node = node.next;
      // if it doesn't, move on to next node
    }  
    return false; 
    // repeat until true is returned, else return false 
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
