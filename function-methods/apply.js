// Apply Method is similar to call method

// Difference b/w call and apply ?

// In call method we pass list of arguments individually while in case of apply we pass arguments as an array
//  .call(obj,arg1,arg2)
//  .apply(obj,[arg1,arg2])

const obj = {
    name: 'Aman'
}

function sayHello(...args){
    console.log(args)
    return 'Hello' + this?.name;
}

sayHello.apply(obj,[1,2,3]); // obj reference and list of arguments