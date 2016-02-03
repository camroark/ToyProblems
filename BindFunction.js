/*Implement the function ‘bind’, which accepts a function and a context as arguments.
The context argument should override an existing context that the function is
defined in. Your bind function should return the passed in function.

Once you have finished that, implement the function ‘bind’ as a method of the
Function.prototype object. This will be similar to your first solution, but
should be able to be used in the following way:
var alice = { name: 'alice', shout: function () { alert(this.name); } };
var boundShout = alice.shout.bind(alice);
boundShout(); // alerts 'alice'
boundShout = alice.shout.bind({ name: 'bob' });
boundShout(); // alerts 'bob'

DO NOT use the native bind() function in your solutions. You may use the functions
call() and apply(). */

var bind = function(func, context){
  var arr = function(num){ return Array.prototype.slice.call(arguments, num);};
  var args = arr(2);
  return function(){
    var bindArg = args;
    bindArg = bindArg.concat(arr(2));
    return func.apply(context, bindArg);
  }
};

Function.prototype.bind = function (context) {
  var args = Array.prototype.slice.call(arguments, 1);
  var ref = this;

  return function () {
    var bindArg = args;
    for(var key in arguments) {
      bindArg = bindArg.concat(arguments[key]);
    }
    return ref.apply(context, bindArg);
  }
}
