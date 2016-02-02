//Given an arbitrary input string, return the first non-repeating character. For
//strings with all repeats, return 'sorry'.


function firstNonRepeatedCharacter (string) {
  var repeatedValues = [];

  for(var i = string.length -1; i >= 0; i--) {
    if((i) !== string.indexOf(string[i])){
      repeatedValues.push(string[i]);
    }
  }
  var store;
  for(var a = 0; a < string.length-1; a++) {
    if(repeatedValues.indexOf(string[a]) === -1) {
      store = string[a];
      break;
    }
  }

  if(store) {
    return store;
  } else {
    return 'sorry';
  }
}
