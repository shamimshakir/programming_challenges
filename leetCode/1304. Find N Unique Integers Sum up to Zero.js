/**
 * @param {number} n
 * @return {number[]}
 */
 
 // Runtime: 104 ms	
 // Memory: 36.4 MB	
var sumZero = function(n) {
    let sum = 0; 
    let uniqueArr = [];
    for(let i = 1; i < n; i++){
        uniqueArr.push(i)
        sum += i;
    }
    uniqueArr.push(-sum)
    return uniqueArr
};
