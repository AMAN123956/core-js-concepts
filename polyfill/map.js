// What map function does
// 1. Map function iterates over an array an returns an resultant array
// 2. Takes three parameter item,index,arr
let array = [1,2,3,4]

const multiplyBy3 = (item) => item*4

const resultArray = array.map((item,index,arr) => item*2);
console.log('non polyfill result',resultArray);

// Polyfill of Map
// .prototype allows you to add new properties and methods to arrays.
Array.prototype.myMap = function(cb){
    let result = [];
    for(let i=0;i<this.length;i++){
        let item = this[i]
        result.push(cb(item));
    }
    return result;
}

const customResultArray = array.myMap(multiplyBy3)
console.log('polyfill result',customResultArray);
