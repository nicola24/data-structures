var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var newInstance = {};
  newInstance.count = 0;
  newInstance.tracker = 0;
  newInstance.storage = {};
  _.extend(newInstance, queueMethods); 

  return newInstance;
  
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
    var tempStorage = this.storage[this.tracker];
    delete this.storage[this.tracker];
    this.count--;
    this.tracker++;
    return tempStorage;
  },

  size: function() {
    return this.count;
  }

};


