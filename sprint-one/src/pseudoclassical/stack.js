var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};

};

Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  if (this.count === 0) {
    return 0;
  }
  delete this.storage[this.count];
  this.count--;
  return this.storage[this.count];
};


Stack.prototype.size = function() {
  return this.count;
};

var testObj = new Stack(); 
testObj.push('a');
testObj.pop();
testObj.size();


