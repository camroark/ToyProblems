/*Given a positive integer n, return its digits reversed.
DO NOT CONVERT n INTO A STRING OR ARRAY.
Only use integers and math in your solution.
*/


function reverseInteger(number) {
    var ret = 0;
    console.log('Starting number count: '+number);
    while (number !== 0) {
        ret = ret * 10 + number % 10;
        console.log(ret);
        number = Math.floor(number / 10);
        console.log(number);
    }
    console.log('Return Value: '+ret);
    return Math.floor(ret);
};
