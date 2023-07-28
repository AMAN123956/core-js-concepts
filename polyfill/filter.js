// What filter function does
// 1. filter function iterates over an array an returns an resultant array with only those elements that satisfies a particular condition
// 2. Takes three parameter item,index,arr
let array = [1,2,3,4,5,6]

const checkIsEven = (item) => item % 2 === 0 ? 1 : 0;

const resultArray = array.filter((item,index,arr) => checkIsEven(item));
console.log('non polyfill result',resultArray);

// Polyfill of Filter
// .prototype allows you to add new properties and methods to arrays.
Array.prototype.myFilter = function(cb){
    let result = [];
    for(let i=0;i<this.length;i++){
        let item = this[i]
        if(cb(item)){  // if my given condition is true then only push the element in the array else skip
            result.push(this[i]);
        }
    }
    return result;
}

const customResultArray = array.myFilter(checkIsEven)
console.log('polyfill result',customResultArray);
