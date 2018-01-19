class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.tracker = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.count + this.tracker] = value;
    this.count++;  
  }
  
  dequeue() {
    if (this.count === 0) { 
      return 0;
    }
    var result = this.storage[this.tracker];
    delete this.storage[this.tracker];
    this.count--;
    this.tracker++;
    return result;
  }
  
  size() {
    return this.count;
  }
}
