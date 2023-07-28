// reduce() method accepts a callback function called the reducer.
// The reducer is executed on every element of the array and reduces it to a single value.
// The reducer function has four arguments: previous value(accumulator), current value, the current index, and the array

const sumOfNumbers = (accumulator,item) => accumulator + item;

const array = [1,2,3,4,5]

const resultArray = array.reduce(sumOfNumbers);
console.log('non polyfill result',resultArray)

// if no initial value then first element of array becomes accumulator
Array.prototype.myReduce = function(cb,initialValue){
    let result = initialValue; 
    for(let i=0;i<this.length;i++){
        let item = this[i];
        if(!result) {result = this[0];continue;}
        result = cb(result,item);
    }
    return result;
}


const customResultArray = array.myReduce(sumOfNumbers,0);
console.log('polyfill result',customResultArray)


// reduceRight()
// reduceRight() is the same as the reduce() method, 
// the only difference being that it executes the reducer function backward from the last element of the array.