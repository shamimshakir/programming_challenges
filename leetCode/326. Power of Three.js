/**
 * @param {number} n
 * @return {boolean}
 */

// Iterative way, easy to understand
// Runtime : 288 ms	
// Memory : 46 MB	
var isPowerOfThree = function(n) {
    if(n === 1)return true;
    let power3 = 3;
    while(true){
      if(power3 > n)return false;
      if(power3 === n)return true;
      power3 = power3 * 3;
    }
};


/** Recusion is fun *****/
// Runtime : 952 ms	
// Memory : 61.8 MB	
var isPowerOfThree = function(n) {
  console.log(n)
    if(n === 1)return true;
    if(n < 1)return false;
    return isPowerOfThree(n / 3)
};
