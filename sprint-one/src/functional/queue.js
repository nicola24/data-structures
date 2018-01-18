var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var tracker = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[ count + tracker] = value;
    count++;
  };

  someInstance.dequeue = function() {
    if (count === 0 ) {
      return 0;  
    }
    var result = storage[tracker];
    delete storage[tracker];
    count--;
    tracker++;
    return result;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
