//Given a single input string, write a function that produces all possible anagrams
//of a string and outputs them as an array. At first, don’t worry about repeated strings.
//What time complexity is your solution?
//string (required) - a string of characters.

var anagrams = function(str) {
    var arr = str.split("");
    var results =[];

    var recurse = function(current){
        if(current.length===str.length) {
            if(!results.includes(current)) {
                results.push(current);
            }
        }
        else {
            for(var i=0; i<arr.length; i++){
                var currentChar=arr[i];
                arr.splice(i,1);
                recurse(current+currentChar);
                arr.splice(i,0, currentChar);
            }
        }
    };
    recurse("");

    return results.join('').sort();
};
