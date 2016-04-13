/*Given a positive or negative integer n, return its digits reversed.
DO NOT CONVERT n INTO A STRING OR ARRAY.
Only use integers and math in your solution.
*/
function reverseInteger(number) {
    var ret = 0;
    while (number !== 0) {
        ret = ret * 10 + number % 10;
        number = number > 0 ? Math.floor(number / 10) : Math.ceil(number/10);
    }
    return ret;
};
