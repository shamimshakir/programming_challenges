/**********
Runtime: 76 ms, faster than 93.21% of JavaScript online submissions for Third Maximum Number.
Memory Usage: 40.7 MB, less than 38.79% of JavaScript online submissions for Third Maximum Number.
**********




/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let distintNums = [...new Set(nums)];
    let sorted = distintNums.sort((a,b) => b - a);
    if(sorted.length < 3){
      return sorted[0];
    }else{
      return sorted[2];
    }
};
