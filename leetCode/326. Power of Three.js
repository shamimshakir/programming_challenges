/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n === 1)return true;
    let power3 = 3;
    while(true){
      if(power3 > n)return false;
      if(power3 === n)return true;
      power3 = power3 * 3;
    }
};
