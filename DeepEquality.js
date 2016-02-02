/*Deep Equality
Write a function that, given two objects, returns whether or not the two are deeply
equivalent–meaning the structure of the two objects is the same, and so is the structure
of each of their corresponding descendants.

DO NOT use JSON.stringify.*/

deepEquals = function(a, b){
  var urMom = [];
  var thatOtherGuysMom = [];

  var recurse = function (object, ref) {
    for(var key in object) {
      if(typeof (object[key]) !== 'object') {
        ref.push(object[key]);
      } else {
        recurse(object[key], ref);
      }
    }
  };

  recurse(a, urMom);
  recurse(b, thatOtherGuysMom);

  var longest = urMom.length > thatOtherGuysMom.length ? urMom : thatOtherGuysMom;
  var shortest = urMom.length > thatOtherGuysMom.length ? thatOtherGuysMom : urMom;

  for(var i = 0; i < longest.length; i++ ) {
    if(longest.indexOf(shortest[i]) === -1) {
      return false;
      }
  }

  return true;
};
