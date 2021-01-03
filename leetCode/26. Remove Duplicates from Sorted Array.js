/**
 * @param {number[]} nums
 * @return {number}
 */
 /*******
 Runtime: 108 ms, faster than 33.90% of JavaScript online submissions for Remove Duplicates from Sorted Array.
Memory Usage: 40.7 MB, less than 74.86% of JavaScript online submissions for Remove Duplicates from Sorted Array.
**********/

var removeDuplicates = function(nums) {
  let count = 0, i = 0;
  while(i < nums.length){
    if(nums[i] === nums[i - 1]){
      nums.splice(i,1);
    }else{
      i++;
      count++;
    }
  }
  return count;
};
