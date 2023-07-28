// Bind Method
// Creates a new function that when called has its 'this' keyword
// set to the provided value(object)


const obj = {
    name: 'Aman'
}

function sayHello(...args){
    console.log(args)
    return 'Hello' + this?.name;
}


const helloFn = sayHello.bind(obj) // return a function with this -> obj
helloFn();  // has a binded method


// Only diff between call/apply and bind is that bind return a function with this value set to obj while in case of call/apply we make a function call instead of returning a function definition