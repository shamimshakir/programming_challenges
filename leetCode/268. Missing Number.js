/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let max = Math.max(...nums)
    
    let allNumbs = [];
    for(let i = 0; i <= max; i++){
      allNumbs.push(i)
    }
    
    for(let num of allNumbs){
      if(!nums.includes(num)){
        return num;
      }
    }
    return allNumbs.pop()+1;
};
