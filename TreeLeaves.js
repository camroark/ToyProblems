/*Implement the countLeaves function in this Tree class.

A leaf node is any node in the tree that has no children. countLeaves should
traverse the tree, and return the number of leaf nodes the tree contains.

Illustration of a tree with three leaves:
*/

var Tree = function(value){
  this.value = value;
  this.children = [];
};

//Implement solution here
Tree.prototype.countLeaves = function () {
  var leaves = 0;
  var recurse = function (node) {
   if(node.children.length === 0) {
      leaves++;
      return;
    }
    console.log(node.children.length);
    for(var i = 0; i < node.children.length; i++){
      recurse(node.children[i]);
    }
  }
  recurse(this);
  return leaves;
}

/**
  * You shouldn't need to change anything below here, but feel free to look.
  */
Tree.prototype.addChild = function(child){
  if (!child || !(child instanceof Tree)){
    child = new Tree(child);
  }

  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  }else{
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
