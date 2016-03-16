/*
Implement a map method on this Tree class.
Map accepts a mapping function as its only argument.
It traverses the tree, passing each node’s value into
the mapping function, and generates a new tree containing
the results. So map should return a tree with the same
structure, and different values, but it should NOT modify
 the tree that was passed in.
*/

var Tree = function (value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.map = function (callback) {
  var recurse = function(node) {
    var result = new Tree(callback(node.value));
    for(var i = 0; i<node.children.length; i++) {
      result.children.push(recurse(node.children[i]));
    }
    return result;
  }
  return recurse(this);
};
