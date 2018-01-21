

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  debugger;
  var index = getIndexBelowMaxForKey(k, this._limit); //return index val
  var buckets = this._storage.get(index); // set up a bucket at index 
  if (!buckets) { // if bucket is empty
    this._storage.set(index, [[k, v]]); //   
  } else {
    buckets.forEach(function(items) {
      if (items[0] === k) {
        items[1] = v;
      } 
    });  
    buckets.push([k, v]);
  } 

  // for (var i = 0; i < buckets.length; i++) {
  //   if (!buckets) {
  //     this._storage.set(index, [[k, v]]); // 1
  //   } else if (buckets[i][0] === k) {
  //     buckets[i][1] = v; // 2
  //   } else {
  //     buckets.push([k, v]); //3 
  //   }
  // }

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
//inputs: key
//outputs: value
//access buckets
//check buckets[i][0] if === k
//return buckets[i][1]
  var buckets = this._storage.get(index); 

  if (!buckets) {
    return undefined;
  } else {
    for (var i = 0; i < buckets.length; i++) {
      if (buckets[i][0] === k) {
        return buckets[i][1];
      }
    }
  }
 
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var buckets = this._storage.get(index);
  // for (var i = 0; i < buckets.length; i++) {
  //   if (buckets[i][0] === k) {
  //     buckets.splice(i, 1);
  //   } 
  // }
  if (buckets) {
    if (buckets.length > 1) {

      var keys = buckets.map(function(item) {
        return item[0];
      });
      var keyindex = keys.indexOf(k);
      buckets.splice(keyindex, 1);
    } else {
      this._storage.set(index, undefined);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


