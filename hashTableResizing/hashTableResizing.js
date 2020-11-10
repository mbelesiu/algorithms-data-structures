/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(k, v) {
    var index = getIndexBelowMaxForKey(k, storageLimit);
    var bucket = storage[index] || [];

    for (var i = 0; i < bucket.length; i ++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        var oldValue = tuple[1];
        tuple[1] = v;
        return oldValue;
      }
    }

    bucket.push([k,v]);
    storage[index] = bucket;
    size ++;

    //resize here
    if (size > storageLimit * .75) {
      result.resize(storageLimit*2);
    }

  };

  result.retrieve = function(value) {
    // TODO: implement `retrieve`
    var index = getIndexBelowMaxForKey(value, storageLimit);

    var bucket = storage[index] || [];

    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === value) {
        return tuple[1];
      }
    }
  };

  result.remove = function(value) {
    var index = getIndexBelowMaxForKey(value, storageLimit);

    var bucket = storage[index] || [];

    for ( var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === value) {
        bucket.splice(i,1);
        size--;
        //resize here
        if (size < storageLimit * .25) {
          result.resize(storageLimit/2);
        }
      }
    }
  };

  result.resize = function (newSize) {
    var old = storage;

    storageLimit = newSize;
    size = 0;
    storage = [];

    old.forEach(function(bucket) {
      for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        result.insert(tuple[0], tuple[1]);
      }
    })
  };

  return result;
};
