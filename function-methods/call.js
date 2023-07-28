// Call,apply and bind are three methods that are availabel to all js functions
// These methods are used to tie a function into an object and cal the function


// Call
// Method calls the function with a given this value and arguments are provided individually

const dominoes = {
    name: 'Dominos',
    dailyEarnings: [2300, 1900, 3000, 1000, 4000, 4920, 9828],
    calcAverageEarning(earnings = this.dailyEarnings) {
      let sum = 0;
      for (let i = 0; i < earnings.length; i++) {
        sum += earnings[i];
      }
      this.average = Math.round(sum / earnings.length);
      return this.average;
    },
  };

  // Suppose we create an instance of an object
  const earningCalculator = dominoes.calcAverageEarning;
  // now if we call earningCalculator() it will not work 
  // as it does not have access to this property

  // so to solve above problem my call method comes to rescue
const sampleObject = {
    name: 'Sample',
    dailyEarnings: [2300, 1900, 3000, 1000, 4000, 4920, 9828],
}
earningCalculator.call(sampleObject); // now this points to sample object

// to pass further parameters
earningCalculator.call(sampleObject,arg1,arg2,arg3)
