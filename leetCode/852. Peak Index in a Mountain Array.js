/**
 * @param {number[]} A
 * @return {number}
 */
 
 // Runtime: 56 ms	
 // Memory: 34.1 MB
var peakIndexInMountainArray = function(A) {
    let max = Math.max(...A)
    return A.indexOf(max)
};
