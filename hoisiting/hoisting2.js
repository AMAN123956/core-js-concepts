// Hoisitng is a phenomenon in js in which we can access the variables and funcitons before we have initialized them

// In JavaScript, the process of hoisting happens during the creation phase of an execution context.

// the phenomenon of moving all the variables & function declartation/definition at top of their scope, before executing the code is known as hoisting


// variables defined with var and function declaration are hoisited to the top of execution context in which they were declared
// variables declared with var are given undefined value whereas function refers to actuall funciton definition


// let and const are also hoisted (in a different way: they are in temporal dead zone for the time being)
// Temporal Dead Zone exists until variable is declared and assigned a value.


console.log(age); // ReferenceError
let age = 12;

console.log(age1)  // hoisited with undefined value
var age1 = 12



// Note : 
// In the global context, a variable created with the let or const keyword is stored 
// in a type of variable object called Script. Those created with the var keyword are stored in a  variable object called Global. 
// While in the function context, all variables are stored in the functions' Activation Object.

