/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.
*/

var runningSum = function(nums) {
    let output = [nums[0]]
    
    for(let i = 1; i < nums.length; i++){
        output.push(output[i - 1] + nums[i])
    }
    return output
};
