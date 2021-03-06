//Output: 
//Input: 
//Constrains/Conditions:
//Examples/Edge Cases:
//  Start of Code-                                                 ===
var makeHashTable = function () {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  var resizing = false;

  const resize = function (newSize) {
    storageLimit = newSize;
    size = 0;
    const oldStorage = storage;
    storage = [];
    oldStorage.forEach(pairs => {
      let newIndex = getIndexBelowMaxForKey(pairs[0][0], storageLimit);
      if (!storage[newIndex]) {
        storage[newIndex] = pairs;
        size++;
      } else {
        storage[newIndex].push(pairs);
        size++;
      }
    });
  };

  result.insert = function (key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    storage[index] = storage[index] || [];
    var pairs = storage[index];
    var pair;
    var replaced = false;
    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        pair[1] = value;
        replaced = true;
      }
    }

    if (!replaced) {
      pairs.push([key, value]);
      size++;
    }
    if (size >= storageLimit * 0.75) {
      // increase the size of the hash table
      resize(storageLimit * 2);
    }
  };

  result.retrieve = function (key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    if (!pairs) {
      return;
    }
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair && pair[0] === key) {
        return pair[1];
      }
    }
  };

  result.remove = function (key) {

    var index = getIndexBelowMaxForKey(key, storageLimit);
    var pairs = storage[index];
    var pair;

    for (var i = 0; i < pairs.length; i++) {
      pair = pairs[i];
      if (pair[0] === key) {
        var value = pair[1];
        delete pairs[i];
        size--;
        if (storageLimit !== 4 && size <= storageLimit * 0.25) {
          resize(storageLimit / 2);
        }
        return value;
      }
    }
  };

  //This next function you would never have for a hash table
  //It is here merely for testing purposes. So we can check that 
  //you are resizing correctly
  result.find = function (index) {
    //return the bucket at a given index
    return storage[index];
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function (str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

// * -End of Code                                                    ===
// * given tests:

var hashTable = makeHashTable();

var id = 0;
var diffs = [];
var endTime, startTime, key;
for (var i = 0; i <= 10; i++) {
  for (var j = 0; j < 100; j++) {
    key = 'userid:' + (id++);
    hashTable.insert(key, 'hocus pocus');
  }
}

//below here, we will test to make sure that you have redistributed
//values from the hash table over time. Again, you can ignore the 
//getIndexBelowMaxForKey function
// function getIndexBelowMaxForKey (str, max){
//   var hash = 0;
//   for (var i = 0; i < str.length; i++) {
//     hash = (hash<<5) + hash + str.charCodeAt(i);
//     hash = hash & hash; // Convert to 32bit integer
//     hash = Math.abs(hash);
//   }
//   return hash % max;
// }

//select 10 random keys and make sure that they are in the correct
//place in the hash table
for (var i = 0; i < 10; i++) {
  var found = false;
  var place = Math.floor(Math.random() * 11000); //since we added about
  //11,000 items in the functionality at beginning 
  var str = 'userid:' + place;
  var supposedIndex = getIndexBelowMaxForKey(str, 16384);
  console.log('sup index is: ', supposedIndex);
  var bucket = hashTable.find(supposedIndex);
  console.log('bucket :', bucket);
  for (var z = 0; z < bucket.length; z++) {
    if (bucket[z][0] === str) {
      found = true;
    }
  }
  console.log(found); // ? (true)
}