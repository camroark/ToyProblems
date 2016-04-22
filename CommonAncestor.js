/*
Implement the function getClosestCommonAncestor and getAncestorPath
in the Tree class
*/

var Tree = function(){
  this.children = [];
};

/**
  * add an immediate child
  */
Tree.prototype.addChild = function(child){
  if(!this.isDescendant(child)){
    this.children.push(child);
  }else {
    throw new Error("That child is already a child of this tree");
  }
  return this;
};

Tree.prototype.getClosestCommonAncestor = function(){
  var compare;

  for(var argNum = 0; argNum < arguments.length; argNum++) {
    relative = arguments[argNum];
    if(this.isDescendant(relative) === false) {
      if(this === relative) {
        return this;
      }
      return null;
    } else if (compare === undefined) {
      compare = this.getAncestorPath(relative);
    } else {
      var relL  = this.getAncestorPath(relative).length;
      var compL = compare.length;
      var relPath = this.getAncestorPath(relative);
      var max = relL > compL ? compL : relL;

      for(var i = 0; i < max; i++) {
        if(compare[i] !== relPath[i]){
          compare = compare[i-1];
          break;
        }
      }

    }
  }
  return compare;
}

Tree.prototype.getAncestorPath = function(target){
  if(this.isDescendant(target) === false) {
    return null;
  }
  var stack = [];
  var result;
  var recurse = function(node) {
    stack.push(node);
    if(node === target){
      result = [];
      for(var keys in stack) {
        result[keys] = stack[keys];
      };
      return;
    }

    if(node.children.length === 0 || result !== undefined) {
      return;
    }

    for(var i = 0; i < node.children.length; i++) {
      recurse(node.children[i]);
      stack.pop();
    }
  }
  recurse(this);
  return result;
}

/**
  * check to see if the provided tree is already a child of this
  * tree __or any of its sub trees__
  */
Tree.prototype.isDescendant = function(child){
  if(this.children.indexOf(child) !== -1){
    // `child` is an immediate child of this tree
    return true;
  } else {
    for(var i = 0; i < this.children.length; i++){
      if(this.children[i].isDescendant(child)){
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
Tree.prototype.removeChild = function(child){
  var index = this.children.indexOf(child);
  if(index !== -1){
    // remove the child
    this.children.splice(index,1);
  }else{
    throw new Error("That node is not an immediate child of this tree");
  }
};
