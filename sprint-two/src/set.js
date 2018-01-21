var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; // fix me
  return set;
};

var setPrototype = {

  add: function(item) {
    this.storage[item] = item;
  
  },

  contains: function(item) {
    for (var key in this.storage) {
      if (this.storage[key] === item) {
        return true;
      }
    }
    return false;
  },

  remove: function(item) {
    delete this.storage[item];
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
