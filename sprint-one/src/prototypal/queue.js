var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.count = 0; 
  obj.tracker = 0;
  
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.count + this.tracker] = value;
    this.count++;
  },
  dequeue: function() {
    if (this.count === 0) {
      return 0;
    }
    var result = this.storage[this.tracker];
    delete this.storage[this.tracker];
    this.count--;
    this.tracker++; 
    return result;
  },
  size: function() {
    return this.count;
  }
   
};

