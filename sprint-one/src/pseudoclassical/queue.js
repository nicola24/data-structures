var Queue = function() {
  this.count = 0;
  this.storage = {};
  this.tracker = 0;  
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count + this.tracker] = value;
  this.count++; 
};

Queue.prototype.dequeue = function() {
  if (this.count === 0) {
    return 0;
  }
  var result = this.storage[this.tracker];
  delete this.storage[this.count];
  this.count--;
  this.tracker++;
  return result;
};

Queue.prototype.size = function() {
  return this.count; 
};

