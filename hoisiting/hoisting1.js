// In Javascript an execution context is created when
// 1. You Load A Script File
// 2.When a function is called.

// The execution context created when the script file is loaded is called the Global Execution Context, while the context created when a function is invoked is called a Function Execution context.


// JS CODE EXECUTES IN TWO PHASES:
// 1. Creation Phase
// 2. Execution Phase

// 1. Creation Phase:
// During Creation Phase a global window object is created 
// this is assigned to window object
// all the variables are memoized as key value pair
// all variables are stored in memory and given an initial value of undefined, while the initial value of a function declaration is itself.


// What happens in the creation phase is that only declarations are memorised.
// It is important to state that a function is a value. A function declaration is treated as a whole. This means it is not a statement that can be further broken down into two parts (name and value - like the case of variables).
// This is why during the creation phase, a function is stored wholly in memory and a reference to it is generated which can be accessed using the function name.


// 2. Execution Phase
// During the execution phase, all other actions are executed i.e., any statement 
// that is not a declaration e.g., variable assignments, function calls, loops, if...statements etc.


// Example
var city = "Lagos";

function printLocation (prefix) {
    var country = "Nigeria";
    console.log(`${prefix} ${city}, ${country}`);
}

printLocation("User is located at")


// The code above is going to be compiled as follows;

// The compiler receives the program contained in the file index.js (represented in the code snippet above).

// A global execution context is created.

// The creation phase of the context kicks off and in this phase;
// - The global object is created and assigned to window.
// - The this keyword is generated and it points to window.
// - An object/memory space gets created for all the declarations in the context.
// - All variable and function declarations get stored in memory.
// This means at this stage, the variable city above will have its value set to undefined, while the function printLocation will be stored in the created memory as it is.

// The Execution phase begins.
// - The assignment part of the statement in line 1 of the code above gets executed. The result of this is that the value of city in memory will be updated to Lagos then the control flow moves to line 9 (since no execution happens between lines 2 and 8) remember that declarations have been taken care of in the creation phase.
// - The function call on line 9 gets executed, causing control flow to go into the printLocation function body thereby pausing the execution of the global context and creating a new context for the printLocation function to execute.