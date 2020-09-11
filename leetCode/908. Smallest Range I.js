/**
Runtime: 68 ms, faster than 96.67% of JavaScript online submissions for Smallest Range I.
Memory Usage: 38 MB, less than 68.33% of JavaScript online submissions for Smallest Range I.
**/

var smallestRangeI = function(A, K) {
    if(A.length <= 1)return 0;
    
    let diff = (Math.max(...A) - K) - (Math.min(...A) + K)
    return diff < 0 ? 0 : diff;
};
