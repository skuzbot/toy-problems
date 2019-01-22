//Output: 
//  an array that returns nodes in breadth first order that pass filter function
//Input: 
// a tree
//Constrains/Conditions:
//  
//  
//Examples/Edge Cases:
//
//
//            //_____//_____First Submit_____\\_____\\               \\

var Queue = function () {
  var storage = [];

  this.enqueue = function (item) {
    storage.push(item);
  };

  this.dequeue = function () {
    return storage.shift();
  };

};

var Tree = function (value) {
  this.value = value;
  this.children = [];
  this.depth = 0;
};

Tree.prototype.BFSelect = function (filter) {

  const queue = new Queue();
  const output = [];
  let queueSize = 0;
  let currentNode;
  
  queue.enqueue(this);
  queueSize++;

  
  while (queueSize > 0) {
    currentNode = queue.dequeue();
    queueSize--;
    if (currentNode.children.length) {
      currentNode.children.forEach((child) => {
        queue.enqueue(child);
        queueSize++;
      });
    }
    if (filter(currentNode.value, currentNode.depth)) {
      output.push(currentNode.value);
    }
  }
  
  return output;
};

/**
 * You shouldn't need to change anything below here, but feel free to look.
 */



/**
 * add an immediate child
 * (wrap values in Tree nodes if they're not already)
 */
Tree.prototype.addChild = function (child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }

  if (!this.isDescendant(child)) {
    child.depth = this.depth + 1;
    this.children.push(child);
  } else {
    throw new Error('That child is already a child of this tree');
  }
  // return the new child node for convenience
  return child;
};

/**
 * check to see if the provided tree is already a child of this
 * tree __or any of its sub trees__
 */
Tree.prototype.isDescendant = function (child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

/**
 * remove an immediate child
 */
Tree.prototype.removeChild = function (child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error('That node is not an immediate child of this tree');
  }
};


///                                                                 \\\


// given tests:

const all = function (value, depth) {
  return true;
};

var root1 = new Tree(1); // depth 0
var branch3 = root1.addChild(3); // depth 1
var branch2 = root1.addChild(2); // depth 1
var branch4 = branch3.addChild(4); // depth 2
var leaf5 = branch3.addChild(5); // depth 2
var leaf6 = branch2.addChild(6); // depth 2
var branch7 = branch2.addChild(7);
var leaf8 = branch4.addChild(8);
var leaf9 = branch7.addChild(9); // depth 2

console.log(root1.BFSelect(all));