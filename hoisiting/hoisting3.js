// Output Based Questions

console.log(y);  // reference error : y is not defined
y = 1;


y = 3
console.log(y)  // 3 bcz code interprets in such a way  -- var y --> value assigned to 3 --> console.log(y)
var y;


var z = 1;
let z; //Identifier ‘z’ has already been declared
console.log(z);


console.log(z); // Cannot access ‘z’ before initialization
let z = 1;


// let a = 2;
// let a = 3; // this gives error that 'a has already been declared'

// while
// var a = 3
// var a = 5 // it works now final value of a is 5 not 3


function hoistingExample() {
    console.log("Value of a in local scope: ", a);  // first it tries to find a in local scope then it refers to global scope for the value
}
console.log("Value of a in global scope: ", a);
var a = 1;
hoistingExample();

// Output 
// Value of a in global scope : undefined
// Value of a in local scope 1


function hoistingExample() {
    a = 1;
}
hoistingExample();
 console.log(a);   // Variables which are assigned without a var declaration are considered to be global variables

// Output
// 1



var a = 1;
(function () {
  // 'var a = 2' is hoisted here -> var a = undefined
  // 'this.a' is number -> this.a = 1 (undefined + number -> NaN)
  console.log(a + this.a); // NaN
  var a = "2";
  console.log(a + this.a); // "21"
})();

var name = 1;
(function () {
  // 'var name = 2' is hoisted here -> var name = undefined
  /* Any global variable named `name` overwrites `window.name` pproperty.
  Also, before overwriting, value of `name` variable is passed to `String`
  to convert it to string and then it is overwritten. Since `symbol` can't be converted to 
  string thus if we declare global variable `name` as symbol then while converting it 
  to `string`, TypeError will be thrown.
   */
  // 'this.name' is string -> this.name = "1" (undefined + string -> "undefinedString")
  console.log(name + this.name); // "undefined1"
  var name = "2";
  console.log(name + this.name); "21"
})();


// NOTE : undefined + number ->  NaN, undefined + string -> undefinedString (concatenation occurs)
  
// there is another variable with foo name in the function too, so a foo variable with undefinde value get intialized in memory component of execution context of this function
var foo = 1;
(function () {
  console.log(foo); //foo variable with undefined value is present memory component of execution context of this function
  foo = 2; // this function's foo becomes 2
  console.log(window.foo); //outer/window foo still remains 1
  console.log(foo); // this function's foo is 2 
  var foo = 3; // this function's foo becomes 3
  console.log(foo); // this function's foo is 3
  console.log(window.foo) //outer/window foo is still  1
})();
