/* Common Characters
Write a function that accepts two strings as arguments, and returns only the
characters that are common to both strings.

Your function should return the common characters in the same order that they
appear in the first argument. Do not return duplicate characters and ignore
whitespace in your returned string.
Example: commonCharacters('acexivou', 'aegihobu')
Returns: 'aeiou' */

commonCharacters = function(string1, string2){
  var results = '';
  for(var i = 0; i < string1.length; i++) {
    if((string2.indexOf(string1[i]) !== -1) && (string1[i] !== ' ') && (results.indexOf(string1[i]) === -1)) {
      results+=string1[i];
    }
  }
  return results;
};
