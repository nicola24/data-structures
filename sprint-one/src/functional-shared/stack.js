var Stack = function() {
debugger;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newInstance = {};
  newInstance.storage = {};
  newInstance.count = 0; 
  _.extend(newInstance, stackMethods);
  
  return newInstance;
};  

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
    
  pop: function() {
    if (this.count === 0) {
      return 0; 
    }
    delete this.storage[this.count];
    this.count--;
    return this.storage[this.count];
  },
    
  size: function() {
    return this.count;
  }

};



